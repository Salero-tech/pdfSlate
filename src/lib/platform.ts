
let isTauri = false;

if (window.__TAURI_INTERNALS__) isTauri = true;

export const isWeb = !isTauri;
