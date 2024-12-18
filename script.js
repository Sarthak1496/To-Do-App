// Select Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to Add a Task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new task element
  const taskItem = document.createElement('li');
  taskItem.className = 'task';

  // Add the task text
  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = taskText;

  // Add a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  // Event Listener for Delete Button
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Toggle task completion
  taskTextNode.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Append elements to task item
  taskItem.appendChild(taskTextNode);
  taskItem.appendChild(deleteBtn);

  // Add task to the list
  taskList.appendChild(taskItem);

  // Clear input
  taskInput.value = '';
}

// Event Listener for Add Task Button
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
