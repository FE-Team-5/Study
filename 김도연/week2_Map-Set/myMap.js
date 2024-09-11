class MyMap {
  constructor() {
    this.obj = {};
    this.order = []; // 순서 보장
  }

  getStringKey(key) {
    // 객체 또는 배열인 경우, JSON 문자열로 변환 / 그 외 직접 변환
    if (typeof key === 'object' || typeof key === 'function') {
      return JSON.stringify(key);
    }
    if (typeof key === 'bigint') return `${key}n`; // BigInt 구분자 추가
    return `${key}`;
  }

  // 문자열을 원래 키로 복원
  parseKey(key) {
    if (typeof key === 'object' || typeof key === 'function') {
      return JSON.parse(key);
    }
    return this.parsePrimitive(key);
  }

  // 원시 값으로 복원
  parsePrimitive(key) {
    if (key === undefined) return undefined;
    if (key === null) return null;
    if (key === 'true') return true;
    if (key === 'false') return false;
    if (key.endsWith('n')) return BigInt(key.slice(0, -1));
    if (key.startsWith('Symbol(')) return Symbol(key.slice(7, -1));
    if (!isNaN(key) && !key.includes(' ')) return Number(key);
    return key;
  }

  set(key, value) {
    const keyString = this.getStringKey(key);
    if (!this.obj[keyString]) this.order.push(keyString);
    this.obj[keyString] = value;
  }

  get(key) {
    const keyString = this.getStringKey(key);
    return this.obj[keyString];
  }

  delete(key) {
    const keyString = this.getStringKey(key);
    if (this.obj[keyString]) {
      delete this.obj[keyString];
      this.order = this.order.filter((x) => x !== keyString);
      return true;
    }
    return false;
  }

  has(key) {
    const keyString = this.getStringKey(key);
    return this.obj[keyString] ? true : false;
  }

  clear() {
    this.obj = {};
    this.order = [];
  }

  get size() {
    return this.order.length;
  }

  keys() {
    const keys = this.order.map((key) => this.parseKey(key));
    let idx = 0;

    return {
      next: () => {
        if (idx < keys.length) return { value: keys[idx++] };
        else return { value: undefined };
      },
    };
  }

  values() {
    const values = this.order.map((key) => this.obj[key]);
    let idx = 0;

    return {
      next: () => {
        if (idx < values.length) return { value: values[idx++] };
        else return { value: undefined };
      },
    };
  }

  entries() {
    const entries = this.order.map((key) => [
      this.parseKey(key),
      this.obj[key],
    ]);
    let idx = 0;

    return {
      next: () => {
        if (idx < entries.length) return { value: entries[idx++] };
        else return { value: undefined };
      },
    };
  }
}

const myMap = new MyMap();

// 요소 추가
myMap.set('animal', 'dog');
myMap.set(123, 'food');
myMap.set(true, 'color');

// 요소 반환
console.log(myMap.get('animal')); // dog
console.log(myMap.get(123)); // food
console.log(myMap.get(true)); // color

// 요소 존재 확인
console.log(myMap.has('ani')); // false
console.log(myMap.has('animal')); // true

// 요소 개수
console.log(myMap.size); // 3

// key 확인
const keys = myMap.keys();
console.log(keys.next().value); // animal
console.log(keys.next().value); // 123
console.log(keys.next().value); // true

// value 확인
const values = myMap.values();
console.log(values.next().value); // dog
console.log(values.next().value); // food
console.log(values.next().value); // color

// key-value 쌍 확인
const entries = myMap.entries();
console.log(entries.next().value); // ['animal' , 'dog']
console.log(entries.next().value); // [123, 'food']
console.log(entries.next().value); // [true, 'color']

// 요소 삭제
myMap.delete(123);
console.log(myMap.has(123)); // false

// 초기화
myMap.clear();
console.log(myMap.size); // 0
