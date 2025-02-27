<<<<<<< HEAD
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
=======
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
>>>>>>> 9a8ac6c63169312b05665484361caa5884eb5bc7
console.log(newArr)