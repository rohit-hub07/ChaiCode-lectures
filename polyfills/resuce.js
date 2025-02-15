if(!Array.prototype.myReduce){
  Array.prototype.myReduce = function(userFn){
    let res = 0;
    for(let i = 0; i< this.length; i++){
      res += userFn(this[i]);
    }
    return res;
  }
}

const arr = [1,2,3,4,5]
const initialValue = 0;
const newArr = arr.myReduce((el, currValue) => el+currValue)
console.log(newArr);