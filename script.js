const taskInput = document.getElementById('task-name');
const addButton = document.getElementById('button');
const tasksContainer = document.getElementById('tasks-container');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Пожалуйста, введите название задачи!");
        return; 
    }
    const newTask = document.createElement('p');
    newTask.classList.add('task-item');
    newTask.textContent = taskText;
    tasksContainer.appendChild(newTask);
    taskInput.value = "";
    console.log(`Добавлена новая задача: ${taskText}`);
}
addButton.addEventListener('click', addTask);