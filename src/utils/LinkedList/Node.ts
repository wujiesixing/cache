export default class Node {
  item;

  next;

  prev;

  constructor(prev, element, next) {
    this.item = element;
    this.next = next;
    this.prev = prev;
  }
}
