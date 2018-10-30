export function telephoneCheck(str) {
  /* eslint max-len: ["error", { "code": 300 }] */
  const regExp = /^\s*1?\s*((\(\d{3}\))|(\d{3}))\s*-?\s*(\d{3})\s*-?\s*(\d{4})\s*$/;
  return regExp.test(str);
}
