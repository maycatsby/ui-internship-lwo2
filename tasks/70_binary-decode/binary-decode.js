export function binaryDecode(str) {
  if (!str) return '';
  const codedArr = str.split(' ');
  const decodedArr = [];
  codedArr.map((value, index) =>{
    decodedArr.push(String.fromCharCode(parseInt(value, 2)));
  });
  return decodedArr.join('');
}
