class CustomSet {
  constructor() {
    this.items = [];
  }

  add(value) {  //값 추가
    if (!this.has(value)) {
      this.items.push(value);
    }
  }

  has(value) {  //값 존재 확인
    return this.items.indexOf(value) !== -1;
  }

  delete(value) {  //값 삭제
    const index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// CustomSet 
const myCustomSet = new CustomSet();
myCustomSet.add(1);
myCustomSet.add(2);
myCustomSet.add(2); // 중복된 값은 추가되지 않음
console.log(myCustomSet.has(1)); // true
console.log(myCustomSet.size()); // 2
myCustomSet.delete(2);
console.log(myCustomSet.has(2)); // false
console.log(myCustomSet.size()); // 1

// Set 객체 
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // 중복된 값은 추가되지 않음
console.log(mySet.has(1)); // true
console.log(mySet.size); // 2
mySet.delete(2);
console.log(mySet.has(2)); // false
console.log(mySet.size); // 1
