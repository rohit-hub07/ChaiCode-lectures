let display = document.getElementById('display');

function appendCharacter(char){
  display.value += char;
}

function clearDisplay(){
  display.value = '';
}


function deleteLast(){
  display.value = display.value.slice(0, -1);
}

function calculateResult(){
  display.value = eval(display.value);
}




