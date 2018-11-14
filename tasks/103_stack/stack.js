export class Stack {
  constructor() {
    this.collection = {};
    this.size = 0;
  }
  push(element) {
    const node = new Node(element);
    if (!this.size) {
      this.collection[this.size] = node;
      node.prev = null;
      this.last = node;
    } else {
      const lastNode = this.last;
      this.collection[this.size] = node;
      this.collection[this.size].prev = lastNode;
      this.last = node;
    }
    this.size++;
  }
  pop() {
    if (this.size) {
      const delEl = this.last;
      delete this.collection[this.size - 1];
      this.size--;
      this.last = this.collection[this.size - 1];
      return delEl.value;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
