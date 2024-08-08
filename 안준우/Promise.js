class AjwPromise {
  static PENDING = "PENDING";
  static FULFILLED = "FULFILLED";
  static REJECT = "REJECT";
  constructor(executor) {
    this.state = AjwPromise.PENDING;
    this.value = undefined;
    this.onFulfilledCallback = null;
    this.onRejectCallback = null;
    const resolve = (value) => {
      if (this.state === AjwPromise.PENDING) {
        this.value = value;
        this.state === AjwPromise.FULFILLED;
        if (onFulfilledCallback !== null) {
          this.onFulfilledCallback(value);
        }
      }
    };
    const reject = (value) => {
      if (this.state === AjwPromise.PENDING) {
        this.value = value;
        this.state = AjwPromise.REJECT;
        if (onRejectCallback !== null) {
          this.onRejectCallback(value);
        }
      }
    };
    try {
      executor(reject, resolve);
    } catch (error) {
      reject(error);
    }
  }
  then(callback) {
    if (this.state === AjwPromise.PENDING) {
      this.onFulfilledCallback = callback;
    }
    if (this.state === AjwPromise.FULFILLED) {
      callback(this.value);
    }
    return this;
  }
  catch(callback) {
    if (this.state === AjwPromise.PENDING) {
      this.onRejectCallback = callback;
    }
    if (this.state === AjwPromise.REJECT) {
      callback(this.value);
    }
    return this;
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
2. Prmoise는 기본적으로 내부에 function(resolve,reject){} 모양으로 콜백을 전달함

*/
const a = new Promise(function (resolve, reject) {
  const value = 2;
  resolve(value);
});

a.then((value) => {
  console.log(value);
}).catch((value) => {
  console.log(value + "  aaa");
});

const b = new AjwPromise(function () {
  console.log("aa");
});
