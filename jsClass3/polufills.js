<<<<<<< HEAD
const arr = [1,2,3,4,5,6]

//Error: .forEach function does not exist on arr variable

// arr.forEach(function(value, index){
//   console.log(`Value at Index ${index} is ${value}`);
// })

// if(!Array.prototype.myMap){
//   Array.prototype.myMap = function(userFn){
//     const result = [];
//     for(let i = 0; i< this.length; i++){
//       res = userFn[i] * 2;
//     }

//     return result;
//   }
// }

// const n = arr.map((el) => el * 2);
// console.log(n)

if(!Array.prototype.myFilter){
  Array.prototype.myFilter=  function(userFnc){
    const result = [];
    for(let i = 0; i<this.length; i++){
      if(userFnc(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }
}

const newArr = arr.myFilter((el) => el % 2 !== 0);
console.log(newArr)

=======
const arr = [1,2,3,4,5,6]

//Error: .forEach function does not exist on arr variable

// arr.forEach(function(value, index){
//   console.log(`Value at Index ${index} is ${value}`);
// })

// if(!Array.prototype.myMap){
//   Array.prototype.myMap = function(userFn){
//     const result = [];
//     for(let i = 0; i< this.length; i++){
//       res = userFn[i] * 2;
//     }

//     return result;
//   }
// }

// const n = arr.map((el) => el * 2);
// console.log(n)

if(!Array.prototype.myFilter){
  Array.prototype.myFilter=  function(userFnc){
    const result = [];
    for(let i = 0; i<this.length; i++){
      if(userFnc(this[i])){
        result.push(this[i]);
      }
    }
    return result;
  }
}

const newArr = arr.myFilter((el) => el % 2 !== 0);
console.log(newArr)

>>>>>>> 9a8ac6c63169312b05665484361caa5884eb5bc7
