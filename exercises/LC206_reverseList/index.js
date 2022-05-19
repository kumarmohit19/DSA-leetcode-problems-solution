const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;

    //Change direction
    current.next = prev;

    // Move prev and current to next node in given list
    prev = current;
    current = temp;
  }

  return prev;
};

module.exports = reverseList;
