export function swapCases(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) =>
  chr ? match.toUpperCase() : match.toLowerCase());
}
