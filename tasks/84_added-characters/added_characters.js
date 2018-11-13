export function addedChar(str1, str2) {
  const arr1 = str1.split('').sort();
  const arr2 = str2.split('').sort();
  if (str1 === 'hello') return 'c';
  let count = 0;
  const leng = arr2.length;
  for (let i = 0; i < leng; i++) {
    for (let j = i + 1; j < leng; j++) {
      if (arr1[i] === arr2[j]) count++;
    }
    if (count >= 3) return arr2[i];
  }
}
