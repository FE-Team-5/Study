1. Promise는 실행 상태를 나타낸다.

- 실행 전: pending
- 실행 후 성공했을 때 (resolve): fulfilled
- 실행 후 실패했을 때 (rejected): rejected

2. Promise는 JS 이벤트 루프에서 Microtask Queue에서 비동기적으로 동작한다.

3. 후속 처리 메서드

- Promise.prototype.then
  -> then함수는 첫번째 인자(fulfilled function), 두번째 인자(rejected function)를 넣어서 해당 함수를 동작시킨다.

- Promise.prototype.catch

  -> catch메서드는 하나의 콜백함수를 인자로 받는다.
  -> catch메서드 이후에도 메서드 체이닝이 가능하다. (then과 동일)
  -> Promise에서 발생하는 모든 에러 처리를 담당한다.

- Promise.prototype.finally

  -> catch메서드는 하나의 콜백함수를 인자로 받는다.
  -> finally는 Promise가 settled 된 상태에서 무조건 한 번 실행된다.
  -> 콜백함수의 리턴값이 적용 X

4. Promise 메서드 체이닝 구현

- 후속 처리 메서드인 then, catch, finally의 리턴값을 Promise 객체로 구현
