export function traverseTree(tree, callback) {
  callback(tree);
  if (tree.hasOwnProperty('children')) {
    for (let i = 0; i < tree.children.length; i++) {
      traverseTree(tree.children[i], callback);
    }
  }
}
