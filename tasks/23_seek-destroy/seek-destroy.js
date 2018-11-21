export function destroyer(arr, ...theArgs) {
  return arr.filter((element) => {
    return (theArgs.indexOf(element) == -1);
  });
}
