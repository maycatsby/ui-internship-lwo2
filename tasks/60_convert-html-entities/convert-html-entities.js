export const convertHTML = (str) => {
  let el = {
    '&': '&amp;',
    '<': '&​lt;',
    '>': '&​gt;',
    '"': '&​quot;',
    '\'': '&​apos;',
  };
  return str.replace(/[&<>"']/g, (char) => el[char]).replace(/[\u200B]/g, '');
};
