class MySet {
  constructor() {
    this.obj = {};
  }

  add(value) {
    if (!this.obj[value]) this.obj[value] = value;
    return this;
  }

  delete(value) {
    if (this.obj[value]) delete this.obj[value];
  }

  has(value) {
    return this.obj[value] ? true : false;
  }

  clear() {
    this.obj = {};
  }

  get size() {
    return Object.keys(this.obj).length;
  }

  getIterator() {
    const values = Object.keys(this.obj);
    let idx = 0;

    return {
      next: () => {
        if (idx < values.length) return { value: values[idx++] };
        else return { value: undefined };
      },
    };
  }

  keys() {
    return this.getIterator();
  }

  values() {
    return this.getIterator();
  }

  // 차집합
  difference(otherSet) {
    const result = new MySet();
    for (let value in this.obj) {
      if (!otherSet.has(value)) result.add(this.obj[value]);
    }
    return result;
  }

  // 교집합
  intersection(otherSet) {
    const result = new MySet();
    for (let value in this.obj) {
      if (otherSet.has(value)) result.add(this.obj[value]);
    }
    return result;
  }

  // 공집합
  isDisjointFrom(otherSet) {
    for (let value in this.obj) {
      if (otherSet.has(value)) return false;
    }
    return true;
  }

  // 부분 집합
  isSubsetOf(otherSet) {
    if (this.size > otherSet.size) return false;
    for (let value in this.obj) {
      if (!otherSet.has(value)) return false;
    }
    return true;
  }

  // 상위 집합
  isSupersetOf(otherSet) {
    return otherSet.isSubsetOf(this);
  }

  // 대칭 차집합
  symmetricDifference(otherSet) {
    const result = new MySet();
    for (let value in this.obj) {
      if (!otherSet.has(value)) result.add(this.obj[value]);
    }
    for (let value in otherSet.obj) {
      if (!this.has(value)) result.add(otherSet.obj[value]);
    }
    return result;
  }

  // 합집합
  union(otherSet) {
    const result = new MySet();
    for (let value in this.obj) {
      result.add(this.obj[value]);
    }
    for (let value in otherSet.obj) {
      result.add(otherSet.obj[value]);
    }
    return result;
  }
}

const mySet = new MySet();

// 중복 추가 확인
mySet.add(1);
mySet.add(1); // 중복으로 처리되어 추가 X
mySet.add(2);
mySet.add(3);
console.log(mySet); // {1, 2, 3}

// 요소 확인
console.log(mySet.has(1)); // true
console.log(mySet.has(2)); // true
console.log(mySet.size); // 3

const setIter = mySet.keys();
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // 2
console.log(setIter.next().value); // 3

// 요소 삭제
mySet.delete(2);
console.log(mySet.has(2)); // false

// 초기화
mySet.clear();
console.log(mySet.size); // 0

/** 집합 */
const baseSet = new MySet();
baseSet.add(1).add(2).add(3);

const otherSet = new MySet();
otherSet.add(3).add(4).add(5);

console.log(baseSet.difference(otherSet)); // { 1, 2 }
console.log(baseSet.intersection(otherSet)); // { 3 }
console.log(baseSet.isDisjointFrom(otherSet)); // false
console.log(baseSet.isSubsetOf(otherSet)); // false
console.log(baseSet.isSupersetOf(otherSet)); // false
console.log(baseSet.symmetricDifference(otherSet)); // { 1, 2, 4, 5 }
console.log(baseSet.union(otherSet)); // { 1, 2, 3, 4, 5 }
