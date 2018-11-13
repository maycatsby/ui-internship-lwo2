function Node(value) {
  this.value = value;
  this.prev = null;
}
export function Stack() {
  this.storage = {};
  this.size = 0;
}
Stack.prototype.push = function(value) {
  const node = new Node(value);
  if (this.size === 0) {
    this.storage[this.size] = node;
    this.last = node;
    node.prev = null;
  } else {
    this.storage[this.size] = node;
    this.storage[this.size].prev = this.last;
    this.last = node;
    node.prev = this.storage[this.size-1];
  }
  this.size++;
};
Stack.prototype.pop = function() {
  if (this.size === 0) {
    return undefined;
  } else {
    this.size--;
    let result = this.storage[this.size];
    delete this.storage[this.size];
    this.last = this.storage[this.size-1];
    return result.value;
  }
};
Stack.prototype.size = function() {
  return this.size;
};
Stack.prototype.isEmpty = function() {
  return this.size === 0;
};


