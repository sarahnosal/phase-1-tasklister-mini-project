document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // const newTaskDescription = document.getElementById('new-task-description');
    handleToDo(e.target.new_task_description.value);
  })
});
function handleToDo(todo) {
  let li = document.createElement('li')
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteTask);
  btn.textContent = ' ✓';
  li.textContent = `${todo} `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}
function deleteTask(e) {
  e.target.parentNode.remove();
}