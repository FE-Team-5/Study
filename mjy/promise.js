class myPromise {
  constructor(executor) {
    this.state = "pending"; // pending, fulfilled, rejected
    this.value = undefined; // undefined, value, error
    this.onFulfilledCallback = null;
    this.onRejectedCallback = null;
    this.onFinallyCallback = null;

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }

      if (this.onFulfilledCallback != null) {
        this.onFulfilledCallback(value);
      }
    };

    const reject = (value) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = value;
      }

      if (this.onRejectedCallback != null) {
        this.onRejectedCallback(value);
      }
    };

    executor(resolve, reject);
  }

  then(callback) {
    if (this.state === "pending") {
      this.onFulfilledCallback = callback;
    } else if (this.state === "fulfilled") {
      callback(this.value);
    }
    return this;
  }

  catch(callback) {
    if (this.state === "pending") {
      this.onRejectedCallback = callback;
    } else if (this.state === "rejected") {
      callback(this.value);
    }
    return this;
  }

  finally(callback) {
    return new myPromise((resolve, reject) => {
      if (this.state === "fulfilled" || this.state === "rejected") {
        this.onFinallyCallback = () => {
          callback(this.value);
        };
      }
    });
  }
}

function myResolve(timeout) {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("myresolve");
    }, timeout);
  });
}

function myReject(timeout) {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      reject("myreject");
    }, timeout);
  });
}

myResolve(3000)
  .then((result) => console.log(result))
  .finally((result) => console.log("test"));

myReject(1000).catch((result) => console.log(result));
