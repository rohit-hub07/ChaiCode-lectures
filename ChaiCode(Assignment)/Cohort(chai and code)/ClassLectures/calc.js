let number = 90

let grade;

function calcGrade(marks, grade){
  if(marks >= 60 && marks <70 ){
    return grade = 'D';
  }else if(marks >=70 && marks < 80){
    return grade = 'C';
  }else if(marks >=80 && marks <90){
    return grade = 'B';
  }else{
    return grade = 'A';
  }
}

let res = calcGrade(number, grade);
console.log(res);