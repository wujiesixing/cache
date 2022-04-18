export default class Iterator {
  * [Symbol.iterator]() {
    for (let item = this.first; item; item = item.next) {
      yield item.value
    }
  }
}