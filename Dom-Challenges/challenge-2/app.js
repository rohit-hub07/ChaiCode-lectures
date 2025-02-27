/**
 * Write your challenge solution here
 */
const redBtn = document.getElementById('redButton')
const greenBtn = document.getElementById('greenButton')
const blueBtn = document.getElementById('blueButton')
const purpleBtn = document.getElementById('purpleButton')
const resetBtn = document.getElementById('resetButton')

// [redBtn, greenBtn, blueBtn, purpleBtn].forEach(element => {
//   document.body.style.backgroundColor = element.innerText.toLowerCase()
// });

redBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'red';
})
greenBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'green';
})
blueBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'blue';
})
purpleBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'purple';
})
resetBtn.addEventListener('click', ()=>{
  document.body.style.backgroundColor = '';
})