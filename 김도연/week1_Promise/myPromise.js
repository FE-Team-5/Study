class MyPromise {
  constructor(executor) {
    this.value = null;
    this.reason = null;
    this.state = 'pending';
    this.fulfilledCbs = []; // 이행 상태일 때, 콜백 저장
    this.rejectedCbs = []; // 거부 상태일 때, 콜백 저장

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.value = value;
        this.state = 'fulfilled';
        this.fulfilledCbs.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.reason = reason;
        this.state = 'rejected';
        this.rejectedCbs.forEach((callback) => callback(reason));
      }
    };

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 체이닝을 위한 새 MyPromise 반환
      const handleFulfilled = () => {
        try {
          if (typeof onFulfilled === 'function') {
            // onFulfilled가 함수인 경우 처리
            const result = onFulfilled(this.value);
            result instanceof MyPromise // onFulfilled 결과가 또 다른 Promise 객체인지 여부
              ? result.then(resolve, reject)
              : resolve(result);
          } else resolve(this.value); // onFulfilled가 함수가 아닌 경우 처리
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          if (typeof onRejected === 'function') {
            // onRejected가 함수인 경우 처리
            const result = onRejected(this.reason);
            result instanceof MyPromise // onRejected 결과가 또 다른 Promise 객체인지 여부
              ? result.then(resolve, reject)
              : resolve(result);
          } else reject(this.reason); // onRejected가 함수가 아닌 경우 처리
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleFulfilled();
      } else if (this.state === 'rejected') {
        handleRejected();
      } else {
        this.fulfilledCbs.push(handleFulfilled);
        this.rejectedCbs.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(callback) {
    return this.then(
      (value) => {
        callback();
        return value; // 이행된 값으로 반환
      },
      (reason) => {
        callback();
        throw reason; // 거부된 이유 반환
      },
    );
  }
}

// Test
const example = (number) => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * 2);
    }, 500);
  });
};

example(2)
  .then((value) => {
    console.log(value); // 4
    return example(value);
  })
  .then((value) => {
    console.log(value); // 8
    return example(value);
  })
  .then((value) => {
    console.log(value); // 16
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log('fin')); // fin
