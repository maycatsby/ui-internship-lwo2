export const followTheSpy = (arr) => {
  const route = [...arr[0]];
  const el = arr.slice(1);
  while (el.length) {
    let lastRoute = route.slice(-1)[0];
    for (let i = 0; i < el.length; i++) {
      if (el[i][0] === lastRoute) {
        route.push(el[i][1]);
        el.splice(i, 1); break;
      }
    }
  }
  return route.join(', ');
};

