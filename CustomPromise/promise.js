class MyPromise{
  constructor(executor){
    this._state = "pending";
    this.successCallbacks = [];
    this.rejectedCallbacks = [];
    this.finallyCallbacks = [];
    this.value = undefined;
    executor(this.resolveCustom.bind(this), this.rejectCustom.bind(this))
  }

  then(cb){
    if(this._state == "fullfilled" ){
      cb(this.value);
      return this;
    }
    this.successCallbacks.push(cb);
    return this;
  }
  catch(cb){
    if(this._state == "rejected"){
      cb(this.value);
      return this;
    }
    this.rejectedCallbacks.push(cb);
    return this;
  }

  finally(cb){
    this.finallyCallbacks.push(cb);
    return this;
  }

  resolveCustom(success){
    this.value = success;
    this._state = "fullfilled";
    this.successCallbacks.forEach((cb) =>cb(success))
    this.finallyCallbacks.forEach((cb) => cb())
  }
  rejectCustom(err){
    this.value = err;
    this._state = "rejected";
    this.rejectedCallbacks.forEach((cb) => cb(err));
    this.finallyCallbacks.forEach((cb) => cb())
  }
}


function wait(time) {
  return new MyPromise((resolve, reject) => {
    reject("hello")
  });
}
const p = wait(2);
p.then((success) => console.log("Success", success))
p.catch((err) => console.log("error",err))
p.finally(() => console.log("true in both conditions"))