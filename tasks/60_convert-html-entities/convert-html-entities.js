export function convertHTML(str) {
  const HTML_CODES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;',
  };
  let string = str.slice();
  const targetArr = str.split('');
  targetArr.map((value, index, array) =>{
    if (HTML_CODES.hasOwnProperty(value)) {
      string = string.replace(value, HTML_CODES[value]);
    }
  });
  return string;
}
