export default class LRUCache {
  _map = new Map();

  constructor(options) {
    if (typeof options === 'number')
      options = { cacheSize: options }
    if (!options)
      options = {}
    if (options.cacheSize && (typeof options.cacheSize !== 'number' || options.cacheSize < 0))
      throw new TypeError('cacheSize必须是非负数')

    const cacheSize = this[cacheSize] = options.cacheSize || Infinity
  }

  get(key) {
    if (this._map.has(key)) {
      const val = this._map.get(key);
      this.put(key, val);
      return val;
    }
    return undefined;
  }

  put() {
    if(this._map.size > this.cacheSize) {

    }
  }
}
