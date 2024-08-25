class AjwPromise {
  static PENDING = "PENDING";
  static FULFILLED = "FULFILLED";
  static REJECT = "REJECT";

  #catchCallbacks = [];
  #thenCallbacks = [];
  constructor(executor) {
    this.state = AjwPromise.PENDING;
    this.value = undefined;
    const resolve = (value) => {
      this.update(AjwPromise.FULFILLED, value);
    };
    const reject = (value) => {
      this.update(AjwPromise.REJECT, value);
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  #runCallbacks() {
    if (this.state === AjwPromise.FULFILLED) {
      this.#thenCallbacks.forEach((callback) => callback(this.value));
      this.#thenCallbacks = [];
    }

    if (this.state === AjwPromise.REJECT) {
      this.#catchCallbacks.forEach((callback) => callback(this.value));
      this.#catchCallbacks = [];
    }
  }

  update(state, value) {
    queueMicrotask(() => {
      if (this.state !== AjwPromise.PENDING) return;
      if (value instanceof AjwPromise) {
        value.then(resolve, reject);
        return;
      }
      this.state = state;
      this.value = value;
      if (this.state === AjwPromise.REJECT) console.error(value);
      this.#runCallbacks();
    });
  }
  then(thenCallback, catchCallback) {
    return new AjwPromise((resolve, reject) => {
      this.#thenCallbacks.push((value) => {
        if (!thenCallback) {
          resolve(value);
          return;
        }

        try {
          resolve(thenCallback(value));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCallbacks.push((value) => {
        if (!catchCallback) {
          reject(value);
          return;
        }

        try {
          resolve(catchCallback(value));
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  catch(catchCallback) {
    return this.then(undefined, catchCallback);
  }

  finally(callback) {
    return this.then(
      (value) => {
        callback();
        return value;
      },
      (value) => {
        callback();
        throw value;
      }
    );
  }
}

/* 
1. 아래 코드는 아래 에러 내뱉음
TypeError: Promise resolver undefined is not a function 
즉 Promise는 함수를 인자로 무조건 받아야한다는 사실을 알 수 있음

const a = new Promise();
console.log(a);
*/

/*
//Test 1. resolve, reject 잘 구현했는지 확인
const b = new AjwPromise(function (resolve, reject) {
  const value = null;
  value.length = 1;
  resolve(value);
});
*/

// const a = new Promise((resolve, reject) => {
//   const a = null;
//   a.length = 5;
//   resolve("aa");
// });

// a.then(() => {
//   console.log("then");
// }).catch(() => {
//   console.log("catch");
// });

// 테스트 예제
const asyncTest = new AjwPromise((resolve, reject) => {
  resolve("Async Test Passed");
});

asyncTest
  .then((result) => {
    console.log("22 then");
    console.log(result); // "Async Test Passed" 출력
  })
  .then((result) => {
    console.log("11 then");
  })
  .catch((error) => {
    console.log("캐치!");
  })
  .finally(() => {
    console.log("파이ㅓㄹ");
  });
