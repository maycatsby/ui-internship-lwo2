export function traverseTree(tree, cb) {
  cb(tree);
  if (tree.hasOwnProperty('children')) {
    tree['children'].forEach((value) => {
      traverseTree(value, cb);
    });
  }
}
