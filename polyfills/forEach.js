<<<<<<< HEAD
//foreach
// doesnot create a new array
// iterates through each element

if(!Array.prototype.customForEach){
  Array.prototype.customForEach = function(fnc){
    for(let i = 0; i< this.length; i++){
      fnc(this[i], i, this);
      // console.log(this[i])
      // fnc(this[i])
    }
  }
}

const arr = ["mango", "apple","banana", "grapes","orange"]
arr.customForEach((el) => console.log(el))
=======
//foreach
// doesnot create a new array
// iterates through each element

if(!Array.prototype.customForEach){
  Array.prototype.customForEach = function(fnc){
    for(let i = 0; i< this.length; i++){
      fnc(this[i], i, this);
      // console.log(this[i])
      // fnc(this[i])
    }
  }
}

const arr = ["mango", "apple","banana", "grapes","orange"]
arr.customForEach((el) => console.log(el))
>>>>>>> 9a8ac6c63169312b05665484361caa5884eb5bc7
