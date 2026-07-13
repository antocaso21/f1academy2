# Optional generative-AI mode

The game works immediately with the built-in local intelligence engine. It understands free-text calls, asks state-dependent questions, changes pace/energy/pit commands, and scores communication without a server.

To enable genuinely generative driver wording and evaluation, deploy `backend/cloudflare-worker.js` as a Cloudflare Worker.

1. Create a Worker project and copy `backend/cloudflare-worker.js` into it.
2. Store the API key as a secret, never in GitHub:
   `wrangler secret put OPENAI_API_KEY`
3. Set `ALLOWED_ORIGIN` to `https://antocaso21.github.io` and deploy.
4. Copy the Worker URL into `assets/radio-config.js` as `endpoint`.
5. Commit and push the website again.

Example:

```js
window.MURETTO_RADIO_CONFIG = Object.freeze({
  endpoint: 'https://muretto-pit-wall-radio.YOUR-SUBDOMAIN.workers.dev',
  timeoutMs: 8000,
  mode: 'auto'
});
```

Do not put an OpenAI API key in `radio-config.js`, any HTML file, or any public JavaScript file.
