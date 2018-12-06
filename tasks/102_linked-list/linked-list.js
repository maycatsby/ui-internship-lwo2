export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.amount) {
      this.head = node;
      this.tail = node;
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
      node.prev = currNode;
      this.tail = node;
    }
    this.amount++;
  }
  pop() {
    const currNode = this.tail;
    if (this.amount === 1) {
      this.tail = null;
      this.head = null;
      this.amount--;
      return currNode;
    }
    this.tail = currNode.prev;
    this.tail.next = null;
    this.amount--;
    return currNode;
  }
  iterate(cb) {
    let currNode = this.head;
    while (currNode) {
      cb(currNode);
      currNode = currNode.next;
    }
  }
  insertAfter(position, value) {
    let currNode = this.head;
    const node = new Node(value);
    while (currNode) {
      if (currNode.value === position) {
        const nextNode = currNode.next;
        currNode.next = node;
        node.prev = currNode;
        node.next = nextNode;
        if (nextNode) {
          nextNode.prev = node;
        } else {
          this.tail = node;
        }
        this.amount++;
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }
  removeItem(value) {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        const prevNode = currNode.prev;
        const nextNode = currNode.next;

        if (prevNode) {
          prevNode.next = nextNode;
        } else {
          this.head = nextNode;
        }

        if (nextNode) {
          nextNode.prev = prevNode;
        } else {
          this.tail = prevNode;
        }
        this.amount--;
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
