const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
	if (taskInput.value === '') {
		alert('Please enter a task.');
		return;
	}

	const taskItem = document.createElement('li');
	const taskText = document.createElement('span');
	taskText.textContent = taskInput.value;
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Delete';
	deleteBtn.addEventListener('click', () => {
		taskItem.remove();
	});

	taskItem.appendChild(taskText);
	taskItem.appendChild(deleteBtn);
	taskList.appendChild(taskItem);

	taskInput.value = '';
}

addBtn.addEventListener('click', addTask);
