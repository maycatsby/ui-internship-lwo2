function Node(data) {
  this.value = data;
  this.next = null;
  this.prev = null;
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }
  push(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      let lastEl = this.tail;
      node.prev = lastEl;
      lastEl.next = node;
      this.tail = node;
    }
    this.amount++;
  }
  pop() {
    if (this.amount > 1) {
      let remove = this.tail;
      this.tail = remove.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.amount--;
  }
  iterate(callback) {
    let elIterated = this.head;
    while (elIterated) {
      callback(elIterated);
      elIterated = elIterated.next;
    }
  }
  insertAfter(existValue, newValue) {
    let newNode = new Node(newValue);
    let startNode = this.head;
    while (startNode) {
      if (startNode.value === existValue) {
        newNode.prev = startNode;
        newNode.next = startNode.next;
        startNode.next = newNode;
        let afterNode = newNode.next;
        if (afterNode) {
          afterNode.prev = newNode;
        } else {
          this.tail = newNode;
        }
        this.amount++;
      }
      startNode = startNode.next;
    }
    if (!newNode.next) {
      return false;
    }
  }
  removeItem(item) {
    let startNode = this.head;

    while (startNode) {
      if (startNode.value === item) {
        if (startNode.prev === null && startNode.next === 0) {
          this.head = null;
          this.tail = null;
        } else if (startNode === this.head) {
          this.head = startNode.next;
          this.head.prev = null;
        } else if (startNode === this.tail) {
          this.tail = startNode.prev;
          this.tail.next = null;
        } else {
          let nodeBefore = startNode.prev;
          let nodeAfter = startNode.next;
          nodeBefore.next = nodeAfter;
          nodeAfter.prev = nodeBefore;
        }
        this.amount--;
        return true;
      }
      startNode = startNode.next;
    }
    return false;
  }
}

