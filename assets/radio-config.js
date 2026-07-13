/*
  Optional generative-AI endpoint for Pit Wall Radio.
  Leave endpoint empty to use the built-in local intelligence engine.
  Never put an OpenAI API key in this public file.
*/
window.MURETTO_RADIO_CONFIG = Object.freeze({
  endpoint: '',
  timeoutMs: 8000,
  mode: 'auto'
});
