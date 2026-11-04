// src/worker.js
// Cloudflare Worker entry: serves /api/vote, everything else falls through to static assets (public/)
import { onRequestGet, onRequestPost, onRequestOptions } from './vote.js';

const HANDLERS = {
  GET: onRequestGet,
  POST: onRequestPost,
  OPTIONS: onRequestOptions,
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/vote') {
      const handler = HANDLERS[request.method];
      if (!handler) {
        return new Response('Method Not Allowed', { status: 405 });
      }
      return handler({ request, env });
    }

    return env.ASSETS.fetch(request);
  },
};
