import Node from "./Node";
import Iterator from "../Iterator";

export default class LinkedList extends Iterator {
  length: number = 0;

  first;

  last;

  push(element) {
    _last = this.last;

    newNode = new Node(_last, element, undefined);
    this.last = newNode;
    if (_last === undefined) {
      this.first = newNode;
    } else {
      _last.next = newNode;
    }
    this.length++;

    return this.length;
  }

  pop() {
    _last = this.last;
    return _last;
  }

  unshift(element) {
    _first = this.first;

    newNode = new Node(undefined, element, _first);
    this.first = newNode;
    if (_first === undefined) {
      this.last = newNode;
    } else {
      _first.prev = newNode;
    }
    this.length++;
    return this.length;
  }

  shift() {
    _first = this.first;
    return _first;
  }

  splice(start, deleteCount, ...items) {
    if(start < 0) {
      start = this.length + start
    }
    if(start < 0) {
      start = 0
    }
    if (start > this.length) {
      start = this.length
    }
    item = this.first
    for (let i = 0;i < start; i++) {
      item = item.next
    }
    let arr = [];
    for(let i = 0;i<deleteCount;i++) {
      arr.push(item.value)
      item
    }
  }
}
