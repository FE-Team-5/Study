/*
Map 객체 특징

1. Key-Value 쌍으로 구성된 항목을 포함
2. 추가될 때 키의 순서를 기억한다
3. 메서드
  - set : 값을 추가
  - delete : 값을 삭제
  - clear : 모든 항목 삭제
  - size : 객체에 포함된 항목 개수 반환
  - get : 값 읽기
  - has : 지정된 키를 갖는 항목 포함하는지 여부 확인
  - entries : 모든 키,값을 쌍으로 반환
  - keys : 키 값을 순회하는 메서드
  - values : 값을 순회하는 메서드
  - foreach : 

*/

class MyMap {
  constructor() {
    this.items = {}; //value
    this.keysArray = []; //key
  }

  //추가
  set(key, value) {
    if (!this.has(key)) {
      this.keysArray.push(key);
    }
    this.items[key] = value;
  }

  //삭제
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      this.keysArray = this.keysArray.filter((k) => k !== key);
    }
  }

  //전체삭제
  clear() {
    this.items = {};
    this.keysArray = [];
  }

  //값 읽기
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  //키 존재여부 확인
  has(key) {
    return this.items.hasOwnProperty(key);
  }

  // Map크기 반환
  size() {
    return this.keysArray.length;
  }

  // 키를 배열로 반환
  keys() {
    return [...this.keysArray];
  }

  // 배열로 반환
  values() {
    return this.keysArray.map((key) => this.items[key]);
  }

  // 키,값을 쌍으로 반환
  entries() {
    return this.keysArray.map((key) => [key, this.items[key]]);
  }

  // 키,쌍 값을 순회하며 호출
  forEach(callback) {
    this.keysArray.forEach((key) => {
      callback(this.items[key], key, this);
    });
  }
}

/*
 TEST Code
*/

const myMap = new MyMap();

// 값 추가
myMap.set("id", "user1");
myMap.set("age", 10);
myMap.set("country", "korea");

// 값 조회
console.log(myMap.get("name")); // id
console.log(myMap.get("age")); // 12123

// 키 존재 여부 확인
console.log(myMap.has("country")); // true
console.log(myMap.has("gender")); // false

// 값 삭제
myMap.delete("age");
console.log(myMap.get("age")); // undefined

// 크기 확인
console.log(myMap.size()); // 2

// 모든 키와 값 조회
console.log(myMap.keys()); // [ 'id',, 'country' ]
console.log(myMap.values()); // [ 'user1', 'korea' ]
console.log(myMap.entries()); // [ [ 'id', 'user1' ], [ 'country', 'korea' ] ]

//  순차출력
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
  // Output:
  // name: user1
  // country: korea
});

// 모든 값 제거
myMap.clear();
console.log(myMap.size()); // 0
console.log(myMap.keys()); // []
console.log(myMap.values()); // []
