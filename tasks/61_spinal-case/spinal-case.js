export function spinalCase(str) {
  /* eslint max-len: ["error", { "code": 110 }] */
  let spinal = str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return spinal;
}

