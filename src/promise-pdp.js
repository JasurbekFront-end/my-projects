/* status = "pending" | "fulfilled" | "rejected" */
export class PromisePDP {
  constructor(executor) {
    this.status = 'pending';
    this.result = undefined;
    this.reason = undefined;
    this.onFulfilled = null;
    this.onRejected = null;

    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    this.status = 'fulfilled';
    this.result = value;
    if (this.onFulfilled) {
      this.onFulfilled(this.result);
    }
  }

  reject(reason) {
    this.status = 'rejected';
    if (reason) {
      this.reason = reason;
      if (this.onRejected) {
        this.onRejected(`(in promise) ${this.reason}`);
      } else {
        throw `(in promise) ${this.reason}`;
      }
    }
  }

  then(onFulfilled) {
    this.onFulfilled = onFulfilled;
    return this;
  }

  catch(onRejected) {
    this.onRejected = onRejected;
    return this;
  }
}

function executor(resolve, reject) {
  setTimeout(() => {
    // const user = { id: 123, name: 'kent' };
    const user = null;
    if (user) resolve(user);
    else reject('user not found');
  }, 2000);
}

// const p = new PromisePDP(executor);
// p.then(user => {
//   console.log('user = ', user);
// }).setTimeout(() => console.log(p), 3000);

// const str = 'hello';
// console.log(str.toUpperCase().toLowerCase());
