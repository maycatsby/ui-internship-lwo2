export function maxProduct(inputArray) {
  let initialMult =inputArray[0]*inputArray[1];
  let finalMult = initialMult;
  for (let i=1; i<inputArray.length; i++) {
    initialMult = inputArray[i]*inputArray[i+1];
    if (initialMult > finalMult) {
      finalMult = initialMult;
    }
  }
  return finalMult;
}
