let myArray = [1, 2, 3, 4, 5, 6];

function sumFact(numbers){
  let sum = 0;
  for(let i =0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

let res = sumFact(myArray);
console.log(res);