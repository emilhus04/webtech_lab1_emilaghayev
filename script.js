const taskInput = document.getElementById('task-name');
const addButton = document.getElementById('button');
const tasksContainer = document.getElementById('tasks-container');

// 2. Функция, которая будет выполняться при клике на кнопку
function addTask() {
    // Получаем текст из инпута и убираем пробелы по краям
    const taskText = taskInput.value.trim();

    // Проверка на пустое поле ввода
    if (taskText === "") {
        alert("Пожалуйста, введите название задачи!");
        return; 
    }

    // 3. Создаем новый HTML-элемент <p>
    const newTask = document.createElement('p');
    // Добавляем ему CSS-класс для стилизации
    newTask.classList.add('task-item');
    // Записываем внутрь текст
    newTask.textContent = taskText;

    // 4. Добавляем созданный элемент в контейнер списка на странице
    tasksContainer.appendChild(newTask);

    // 5. Очищаем поле ввода для следующей задачи
    taskInput.value = "";

    // Выводим отладочное сообщение в консоль браузера
    console.log(`Добавлена новая задача: ${taskText}`);
}

// 6. Назначаем обработчик события клика на кнопку
addButton.addEventListener('click', addTask);
