function maxDepth(root) {
  function dive(node) {
    if (!node) {
      return 0;
    } else return Math.max(dive(node.left), dive(node.right)) + 1;
  }

  return dive(root);
}

module.exports = maxDepth;
