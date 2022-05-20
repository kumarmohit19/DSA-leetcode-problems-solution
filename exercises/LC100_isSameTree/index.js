function isSameTree(p, q) {
  let sameTree = true;

  function helper(node1, node2) {
    if (!node1 && !node2) return;

    if (!node1 || !node2) {
      sameTree = false;
      return;
    }

    if (node1.val !== node2.val) {
      sameTree = false;
      return;
    }

    helper(node1.left, node2.left);
    helper(node1.right, node2.right);
  }

  helper(p, q);

  return sameTree;
}

module.exports = isSameTree;
