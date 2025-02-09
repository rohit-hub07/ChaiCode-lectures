let number = 4;

let pizzaSize;

function GuessPizzaSize(number , pizzaSize){
  if(number <= 2){
    return pizzaSize = 'small';
  }else if(number <= 5){
    return pizzaSize = 'medium';
  }else{
    return pizzaSize = 'large';
  }
}

let res = GuessPizzaSize(number, pizzaSize)

console.log(res);