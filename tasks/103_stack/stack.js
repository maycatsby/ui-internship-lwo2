class Node {
  constructor(data) {
    this.value = data;
    this.prev = null;
  }
}

export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }
  push(node) {
    let newTop = new Node(node);
    if (this.last === null) {
      this.last = newTop;
    } else {
      newTop.prev = this.last;
      this.last = newTop;
    }
    this.size++;
  }
  pop() {
    if (this.last === null) {
      return false;
    }
    let toRemove = this.last;
    this.last = toRemove.prev;
    this.size--;
    return toRemove.value;
  }
  size() {
    return this.size;
  }
}
