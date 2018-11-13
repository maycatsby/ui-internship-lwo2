class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
export class LinkedList {
  constructor(value) {
    this.tail = null;
    this.head = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curElement = this.head;

      while (curElement.next) {
        curElement = curElement.next;
      }

      curElement.next = newNode;
      newNode.prev = curElement;
      this.tail = newNode;
    }

    this.amount++;
  }

  pop() {
    const lastElement = this.tail;
    if (this.amount > 0) {
      if (this.amount === 1) {
        this.head = null;
        this.tail = null;
        this.amount--;
        return lastElement;
      }

      this.tail = lastElement.prev;
      this.amount--;
      return lastElement;
    }
  }

  removeItem(val) {
    let curElement = this.head;

    if (this.amount) {
      while (curElement) {
        if (curElement.value === val) {
          const prevElement = curElement.prev;
          const nextElement = curElement.next;

          if (prevElement) {
            prevElement.next = nextElement;
          } else {
            this.head = nextElement;
          }

          if (nextElement) {
            nextElement.prev = prevElement;
          } else {
            this.tail = prevElement;
          }

          this.amount--;
          return true;
        }

        curElement = curElement.next;
      }
    }
    return false;
  }

  iterate(callback) {
    let thisNode = this.head;

    while (thisNode) {
      callback(thisNode);
      thisNode = thisNode.next;
    }
  }

  insertAfter(index, val) {
    let currentElement = this.head;
    const newNode = new Node(val);

    while (currentElement) {
      if (currentElement.value === index) {
        const nextElement = currentElement.next;
        currentElement.next = newNode;
        newNode.prev = currentElement;
        newNode.next = nextElement;

        if (nextElement) {
          nextElement.prev = newNode;
        } else {
          this.tail = newNode;
        }
        this.amount++;
        return;
      }
      currentElement = currentElement.next;
    }
    return false;
  }
}
