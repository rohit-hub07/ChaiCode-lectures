//mapp filter forEach 
// creates new array
if(!Array.prototype.mapArr){
  Array.prototype.mapArr = function(userFnc){
    const res = [];
    for(let i = 0; i<this.length; i++){
      res.push(userFnc(this[i]));
    }
    return res;
  }
}

const arr = [1, 2, 3, 4, 5]
const newArr = arr.mapArr((el) => el *2)
console.log(newArr)