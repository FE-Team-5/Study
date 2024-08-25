/*
Set 객체 특징

1. 중복되지 않는 유일한 값들의 집합
2. 정렬되거나 인덱스를 갖지 않는다.
3. 메서드
  - add : 값을 추가 (다른 데이터 타입을 추가할 수 있다)
  - delete : 값을 삭제
  - clear : Set객체의 모든 요소 전체 삭제 - 항상 undefined반환
  - has : Set객체에 특정 요소의 존재여부를 boolean으로 반환
*/

class MySet {
  constructor() {
    this.items = {};
  }

  //추가
  add(value) {
    if (!this.has(value)) {
      this.items[value] = true;
    }
  }

  //삭제
  delete(value) {
    if (this.has(value)) {
      delete this.items[value];
    }
  }

  //전체삭제
  clear() {
    this.items = {};
  }

  //지정된 값을 포함했을 때는 true, 아닐경우 false 반환
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  size() {
    return Object.keys(this.items).length;
  }

  toArray() {
    return Object.keys(this.items);
  }

  forEach(callback) {
    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        callback(key);
      }
    }
  }
}

/*
  TEST Code
*/

const m = new MySet();

// Set 아이템 추가
m.add("apple");
m.add("banana");
m.add("apple");
m.add("kiwi");

// 개수 확인
console.log("Item Count:", m.size()); // 4

// 값 확인
console.log("has banana:", m.has("banana")); // true
console.log("has grape:", m.has("grape")); // false

// 값 삭제
m.delete("banana");
console.log("has banana:", m.has("banana")); // false

// 모든 값을 배열로 변환
console.log("Set Items", m.toArray()); // [ 'apple','kiwi' ]

// Set의 값을 순회
m.forEach((value) => {
  console.log(value); // apple,kiwi
});
