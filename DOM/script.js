// alert("hi")
const task = document.getElementById('input-field');
const add = document.getElementById('add-btn')
// add = task.value;
// console.log(add)
const lists = document.getElementById('ul-list');

add.addEventListener('click', () =>{
  const newList = document.createElement('li');
  newList.innerText = task.value;
  const btn = document.createElement('button');
  btn.innerText = "X";
  btn.addEventListener('click', () =>{
    newList.remove();
  })
  lists.appendChild(newList);
  newList.appendChild(btn);
  task.value = '';
})

