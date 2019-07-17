export const spinalCase = (str) => {
  return str.replace(/([^\s_])[\s_]?([A-Z])|[\s_]([a-z])/g, '$1-$2$3')
      .toLowerCase();
};
