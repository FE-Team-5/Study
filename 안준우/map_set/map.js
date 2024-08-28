const map = new Map();

class myMap {
  constructor() {
    this.CloseTable = new CloseTable();
  }
  set(key, value) {}
}

class element {
  constructor() {
    this.key = null;
    this.value = null;
    this.chain = null;
  }
}

class CloseTable {
  constructor() {
    this.hashTable = [];
    this.dataTable = [];
    this.nextSlot = 0;
    this.size = 0;
  }
  hash(key) {
    return key % this.size;
  }
}

function hashCode(n) {
  return n;
}
