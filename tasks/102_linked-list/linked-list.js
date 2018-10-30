class Cell {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }
push(value){
    const cell = new Cell;
    if(this.head===null){
        this.head === cell
    }
    if (this.tail !== null) {
        this.tail.next = cell;
      }
       this.tail = cell;
       this.amount++;
    }
}
pop() {
    const cell === this.tail
     
    this.head === cell
}
if (this.tail !== null) {
    this.tail.next = cell;
  }
   this.tail = cell;
   this.amount++;
}
}
insertAfter() {

}
removeItem() {

}
