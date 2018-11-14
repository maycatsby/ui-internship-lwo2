export function spinalCase(str) {
  const result = str;
  return result.replace(/(?!^)([A-Z])/g, ' $1')
      .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}
