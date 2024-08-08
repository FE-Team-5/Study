class AjwPromise {
  static PENDING = "PENDING";
  static FULFILLED = "FULFILLED";
  static REJECT = "REJECT";

  constructor(executor) {
    this.state = AjwPromise.PENDING;
    this.value = undefined;
    const resolve = (value) => {
      if (this.state === AjwPromise.PENDING) {
        this.value = value;
        this.state = AjwPromise.FULFILLED;
      }
    };
    const reject = (value) => {
      if (this.state === AjwPromise.PENDING) {
        this.value = value;
        this.state = AjwPromise.REJECT;
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
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

// const a = new Promise(function (resolve, reject) {
//   const value = "aa";
//   console.log(value);
//   resolve(value);
// });

// a.then((value) => {
//   console.log("원본");
//   console.log(value);
// });
const b = new AjwPromise(function (resolve, reject) {
  const value = "bb";
  reject(value);
});
