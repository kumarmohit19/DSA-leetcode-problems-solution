function isValidBST(root) {
  let isBST = true;

  function helper(node, min, max) {
    if (!node) return;

    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      isBST = false;
      return;
    }

    helper(node.left, min, node.val);
    helper(node.right, node.val, max);
  }

  helper(root, null, null);

  return isBST;
}

module.exports = isValidBST;
