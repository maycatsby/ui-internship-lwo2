export function addTogether(a, b) {
  /* eslint-disable-next-line */
  const args = Object.values(arguments).slice();
  for (let i=0; i < args.length; i++) {
    switch (args.length) {
      case 2:
        if ((typeof(args[0]) != 'number') || (typeof(args[1]) != 'number')) {
          return undefined;
        } else {
          return args[0] + args[1];
        }
      case 1:
        if ((typeof(args[0]) != 'number')) {
          return undefined;
        } else {
          return function(y) {
            if (typeof(y) != 'number') {
              return undefined;
            } else {
              return a + y;
            }
          };
        }
    }
  }
}
