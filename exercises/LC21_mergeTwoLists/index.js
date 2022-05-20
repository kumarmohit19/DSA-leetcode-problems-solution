function mergeTwoLists(l1, l2) {
  const dummyHead = { next: null };
  let current = dummyHead;
  let node1 = l1;
  let node2 = l2;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      current.next = node1;
      node1 = node1.next;
    } else {
      current.next = node2;
      node2 = node2.next;
    }
    current = current.next;
  }

  if (node1) {
    current.next = node1;
  }

  if (node2) {
    current.next = node2;
  }

  return dummyHead.next;
}

module.exports = mergeTwoLists;
