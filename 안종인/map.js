class CustomMap {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(key, value) { //키,값 쌍을 맵에 저장
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
  }

  get(key) { //키에 대응하는 값 반환
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      return this.values[index];
    }
    return undefined;
  }

  has(key) {  //키가 존재하는지
    return this.keys.indexOf(key) !== -1;
  }

  delete(key) { //키가 존재하면 삭제,없으면 false 반환
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      this.keys.splice(index, 1);
      this.values.splice(index, 1);
      return true;
    }
    return false;
  }

  clear() { //비우기
    this.keys = [];
    this.values = [];
  }

  size() {  //키-값 쌍의 수
    return this.keys.length;
  }
}

// CustomMap 사용 예제
const myCustomMap = new CustomMap();
myCustomMap.set("name", "John");
console.log(myCustomMap.get("name")); // "John"
console.log(myCustomMap.has("name")); // true
console.log(myCustomMap.size()); // 1
myCustomMap.delete("name");
console.log(myCustomMap.has("name")); // false
console.log(myCustomMap.size()); // 0

// JavaScript 내장 Map 사용 예제
const myMap = new Map();
myMap.set("name", "John");
console.log(myMap.get("name")); // "John"
console.log(myMap.has("name")); // true
console.log(myMap.size); // 1
myMap.delete("name");
console.log(myMap.has("name")); // false
console.log(myMap.size); // 0
