#!/usr/bin/env python3
"""Generate missing Mimì lines with ElevenLabs (voice: Jessica).

Usage: XI_KEYS=key1,key2,... python3 voice_samples/gen_voices.py [--dry]
Reads voice_samples/lines.json, skips lines that already have a clip in app.js
or an mp3 in a/v/, writes a/v/<hash>.mp3 and a/v/index.json (key -> [file, ms])."""
import hashlib, json, os, re, sys, threading, time, urllib.error, urllib.request, queue

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICE_ID = "cgSgspJ2msm6clMCkdW9"  # Jessica - Playful, Bright, Warm
MODEL = "eleven_multilingual_v2"
SETTINGS = {"stability": 0.45, "similarity_boost": 0.8, "style": 0.35, "use_speaker_boost": True}
OUT = os.path.join(ROOT, "a", "v")
INDEX = os.path.join(OUT, "index.json")


def existing_clips():
    import subprocess
    js = ('const s=require("fs").readFileSync(process.argv[1],"utf8");'
          'const l=s.split("\\n").find(l=>l.startsWith("  var VOICE ="));'
          'console.log(JSON.stringify(Object.keys(eval("("+l.replace("  var VOICE =","").replace(/;\\s*$/,"")+")").clips)))')
    return set(json.loads(subprocess.check_output(["node", "-e", js, os.path.join(ROOT, "app.js")])))


def mp3_ms(data):
    """Duration of a CBR/VBR MPEG-1 Layer III stream by counting frames."""
    i, frames, sr = 0, 0, 44100
    if data[:3] == b"ID3":
        i = 10 + ((data[6] & 127) << 21 | (data[7] & 127) << 14 | (data[8] & 127) << 7 | (data[9] & 127))
    rates = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320]
    srs = [44100, 48000, 32000]
    while i + 4 <= len(data):
        if data[i] == 0xFF and (data[i + 1] & 0xE0) == 0xE0:
            br = (data[i + 2] >> 4) & 15; si = (data[i + 2] >> 2) & 3; pad = (data[i + 2] >> 1) & 1
            if 0 < br < 15 and si < 3:
                sr = srs[si]
                size = 144000 * rates[br] // sr + pad
                frames += 1; i += size; continue
        i += 1
    return round(frames * 1152 * 1000 / sr)


def tts(key, text):
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}?output_format=mp3_44100_128",
        data=json.dumps({"text": text, "model_id": MODEL, "voice_settings": SETTINGS}).encode(),
        headers={"xi-api-key": key, "Content-Type": "application/json"})
    return urllib.request.urlopen(req, timeout=60).read()


def main():
    dry = "--dry" in sys.argv
    keys = [k.strip() for k in os.environ.get("XI_KEYS", "").split(",") if k.strip()]
    lines = json.load(open(os.path.join(ROOT, "voice_samples", "lines.json"), encoding="utf-8"))
    have = existing_clips()
    os.makedirs(OUT, exist_ok=True)
    index = json.load(open(INDEX, encoding="utf-8")) if os.path.exists(INDEX) else {}
    todo, seen = [], set()
    for lang, text in lines:
        k = lang + "|" + text
        if k in have or k in index or k in seen:
            continue
        seen.add(k); todo.append(k)
    print(f"have {len(have)} clips, {len(index)} generated, todo {len(todo)} lines / {sum(len(k) - 3 for k in todo)} chars")
    if dry or not todo:
        return
    q = queue.Queue(); [q.put(k) for k in todo]
    lock = threading.Lock(); errors = []

    def save():
        tmp = INDEX + ".tmp"; json.dump(index, open(tmp, "w", encoding="utf-8"), ensure_ascii=False, indent=0); os.replace(tmp, INDEX)
        open(os.path.join(OUT, "index.js"), "w", encoding="utf-8").write(
            "window.VOICE_EXTRA = " + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ";\n")

    def worker(key, wid):
        while True:
            try: k = q.get_nowait()
            except queue.Empty: return
            text = k[3:].strip()
            spoken = re.sub(r"^[\s.,!?…:;]+", "", text) or text  # PARSE leftovers like "! Brrr!"
            for attempt in range(4):
                try:
                    data = tts(key, spoken); break
                except urllib.error.HTTPError as e:
                    body = e.read()[:300].decode("utf-8", "replace")
                    if e.code in (401, 402) or "quota" in body:
                        print(f"[key{wid}] stopped: {e.code} {body}"); q.put(k); return
                    if e.code == 429: time.sleep(3 * (attempt + 1)); continue
                    data = None; errors.append((k, e.code, body)); break
                except Exception as e:
                    time.sleep(2); data = None; last = e
            else:
                data = None; errors.append((k, "retry", ""))
            if not data: continue
            name = hashlib.md5(k.encode()).hexdigest()[:12] + ".mp3"
            open(os.path.join(OUT, name), "wb").write(data)
            with lock:
                index[k] = ["a/v/" + name, mp3_ms(data)]
                if len(index) % 20 == 0: save(); print(f"  {len(index)} done")

    ts = [threading.Thread(target=worker, args=(k, i)) for i, k in enumerate(keys) for _ in range(2)]
    [t.start() for t in ts]; [t.join() for t in ts]
    save()
    left = q.qsize()
    print(f"generated total {len(index)}; left {left}; errors {len(errors)}")
    for e in errors[:20]: print("  ERR", e)


if __name__ == "__main__":
    main()
