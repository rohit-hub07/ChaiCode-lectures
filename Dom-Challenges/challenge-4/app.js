const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Remove default message if present
  const emptyMessage = document.querySelector('.empty-list');
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Create new list item
  const li = document.createElement('li');

  //Delete button
  const del = document.createElement('button');

  //Delete button inner working;
  del.innerText = 'Delete';
  del.addEventListener('click', () =>{
    li.remove();
    updateStats();
  })

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', updateStats);

  // Create text node for task
  const textNode = document.createTextNode(' ' + taskText);

  

  // Append checkbox and text node to li
  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(del)
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  updateStats();
});

function updateStats() {
  const tasks = taskList.getElementsByTagName('li');
  totalTasks.textContent = 'Total tasks: ' + tasks.length;

  let completed = 0;
  for (let task of tasks) {
    if (task.querySelector('input[type="checkbox"]').checked) {
      completed++;
    }
  }
  completedTasks.textContent = 'Completed: ' + completed;
}
