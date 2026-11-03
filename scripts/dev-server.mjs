// scripts/dev-server.mjs
// Lightweight zero-dependency local dev server that emulates Cloudflare Pages + Pages Functions (/api/vote)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { onRequestGet, onRequestPost, onRequestOptions } from '../functions/api/vote.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '..', 'public');
const PORT = Number(process.env.PORT || 8788);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || `localhost:${PORT}`}`);

  // Route /api/vote to Cloudflare Pages Function handler
  if (url.pathname === '/api/vote') {
    try {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const bodyBuffer = Buffer.concat(chunks);

      const cfRequest = new Request(url.toString(), {
        method: req.method,
        headers: req.headers,
        body: ['GET', 'HEAD', 'OPTIONS'].includes(req.method) ? undefined : bodyBuffer
      });

      const context = {
        request: cfRequest,
        env: {} // Uses SEED_VOTES + in-memory persistence
      };

      let cfResponse;
      if (req.method === 'OPTIONS') {
        cfResponse = await onRequestOptions(context);
      } else if (req.method === 'POST') {
        cfResponse = await onRequestPost(context);
      } else if (req.method === 'GET') {
        cfResponse = await onRequestGet(context);
      } else {
        res.writeHead(405);
        res.end('Method Not Allowed');
        return;
      }

      const headersObj = {};
      cfResponse.headers.forEach((v, k) => {
        headersObj[k] = v;
      });
      res.writeHead(cfResponse.status, headersObj);
      const text = await cfResponse.text();
      res.end(text);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  // Static files from public/
  let filePath = path.join(publicDir, url.pathname === '/' ? 'index.html' : url.pathname);
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`GAUCHE / DROITE local server running at http://127.0.0.1:${PORT}`);
});
