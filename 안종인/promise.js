class SimplePromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach((handler) => this.handle(handler));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.handlers.forEach((handler) => this.handle(handler));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  handle(handler) {
    if (this.state === "fulfilled") {
      if (handler.onFulfilled) {
        handler.onFulfilled(this.value);
      }
    } else if (this.state === "rejected") {
      if (handler.onRejected) {
        handler.onRejected(this.value);
      }
    }
    if (handler.onFinally) {
      handler.onFinally();
    }
  }

  then(onFulfilled, onRejected) {
    return new SimplePromise((resolve, reject) => {
      this.handle({
        onFulfilled: (value) => {
          if (onFulfilled) {
            try {
              resolve(onFulfilled(value));
            } catch (error) {
              reject(error);
            }
          } else {
            resolve(value);
          }
        },
        onRejected: (reason) => {
          if (onRejected) {
            try {
              resolve(onRejected(reason));
            } catch (error) {
              reject(error);
            }
          } else {
            reject(reason);
          }
        }
      });
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (reason) => {
        onFinally();
        throw reason;
      }
    );
  }
}

const promise = new SimplePromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});

promise
  .then((value) => {
    console.log(`Then: ${value}`);
    return "Next Success!";
  })
  .then((value) => {
    console.log(`Then again: ${value}`);
  })
  .catch((reason) => {
    console.log(`Catch: ${reason}`);
  })
  .finally(() => {
    console.log("Finally executed");
  });

setTimeout(() => console.log(`Promise state: ${promise.state}`), 2000);