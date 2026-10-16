#!/usr/bin/env python3
"""Serve Mimì e Pepe locally: python3 serve.py [port]  ->  http://localhost:8000

Unlike `python -m http.server`, this supports HTTP Range requests, which the
browser needs to seek inside the voice files (a/voce_*.mp4)."""
import os
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))


class RangeHandler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map,
                      ".mp4": "audio/mp4", ".webp": "image/webp",
                      ".svg": "image/svg+xml", ".js": "text/javascript"}

    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def send_head(self):
        self.range = None
        m = re.fullmatch(r"bytes=(\d*)-(\d*)", self.headers.get("Range", "").strip())
        path = self.translate_path(self.path)
        if not m or not os.path.isfile(path):
            return super().send_head()
        size = os.path.getsize(path)
        start, end = m.group(1), m.group(2)
        if start:
            start, end = int(start), min(int(end) if end else size - 1, size - 1)
        elif end:  # suffix range: last N bytes
            start, end = max(size - int(end), 0), size - 1
        else:
            return super().send_head()
        if start > end or start >= size:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.end_headers()
            return None
        f = open(path, "rb")
        f.seek(start)
        self.range = end - start + 1
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(self.range))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return f

    def copyfile(self, src, dst):
        if self.range is None:
            return super().copyfile(src, dst)
        left = self.range
        while left > 0:
            chunk = src.read(min(64 * 1024, left))
            if not chunk:
                break
            dst.write(chunk)
            left -= len(chunk)

    def end_headers(self):
        if self.range is None:
            self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Mimì e Pepe -> http://localhost:{port}")
    ThreadingHTTPServer(("127.0.0.1", port), RangeHandler).serve_forever()
