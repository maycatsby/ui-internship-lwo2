export function convertHTML(str) {
  /* eslint max-len: ["error", { "code": 130 }] */
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
