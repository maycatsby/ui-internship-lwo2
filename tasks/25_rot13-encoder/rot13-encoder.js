export function rot13Encoder(str) {
  return str.split('')
      .map.call(str, function(char) {
        let x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);
        } else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
      }).join('');
}
