// Function to generate a unique ID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Function to get the cached task list from local storage
function getCachedTaskList() {
  const cachedTaskList = localStorage.getItem('taskList');
  return cachedTaskList ? JSON.parse(cachedTaskList) : [];
}

// Function to save the task list to local storage
function saveTaskListToCache(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

// Function to render the task list from the cached data
function renderTaskListFromCache() {
  const taskList = getCachedTaskList();
  const taskListContainer = document.getElementById('taskList');

  taskListContainer.innerHTML = ''; // Clear existing task list

  taskList.forEach(function (task) {
    const li = createTaskElement(task.id, task.text, task.completed);
    taskListContainer.appendChild(li);
  });
}

// Function to create a task element
function createTaskElement(id, taskText, completed = false) {
  const li = document.createElement('li');
  li.dataset.id = id;
  li.classList.add('task-item');
  if (completed) {
    li.classList.add('done');
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;
  checkbox.addEventListener('change', function () {
    li.classList.toggle('done');
    updateTaskListCache();

    if (checkbox.checked) {
      playTaskDoneSound();
    }
  });

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('dblclick', function () {
    toggleEditMode(li);
  });

  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskText;
  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      handleTaskEdit(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(input);

  return li;
}

// Function to toggle between view mode and edit mode
function toggleEditMode(li) {
  const span = li.querySelector('span');
  const input = li.querySelector('input[type="text"]');
  const originalText = span.textContent;

  if (!li.classList.contains('edit-mode')) {
    li.classList.add('edit-mode');
    input.value = originalText;
    input.focus();
    input.setSelectionRange(0, input.value.length);

    const handleEnterKeyPress = function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        input.blur();
      }
    };

    const handleOutsideClick = function (event) {
      if (!li.contains(event.target)) {
        input.blur();
      }
    };

    input.addEventListener('keypress', handleEnterKeyPress);
    document.addEventListener('click', handleOutsideClick);
  } else {
    const taskText = input.value.trim();
    if (taskText === '') {
      li.remove();
      deleteTask(li, li.dataset.id);
    } else {
      span.textContent = taskText;
      updateTask(li, li.dataset.id, taskText);
    }
    li.classList.remove('edit-mode');
    span.style.display = 'inline';
    input.style.display = 'none';

    document.removeEventListener('click', handleOutsideClick);
  }
}

// Function to delete a task
function deleteTask(li, taskId) {
  const taskList = getCachedTaskList();
  const updatedTaskList = taskList.filter((task) => task.id !== taskId);
  saveTaskListToCache(updatedTaskList);
  li.remove();
}

// Function to update a task
function updateTask(li, taskId, taskText) {
  const taskList = getCachedTaskList();
  const updatedTaskList = taskList.map((task) => {
    if (task.id === taskId) {
      return { ...task, text: taskText };
    }
    return task;
  });
  saveTaskListToCache(updatedTaskList);
  const span = li.querySelector('span');
  span.textContent = taskText;
}

// Function to handle task editing
function handleTaskEdit(li) {
  const span = li.querySelector('span');
  const input = li.querySelector('input[type="text"]');
  const taskList = getCachedTaskList();
  const taskId = li.dataset.id;
  const task = taskList.find((task) => task.id === taskId);

  if (task) {
    const taskText = input.value.trim();
    if (taskText === '') {
      li.remove();
      const taskIndex = taskList.indexOf(task);
      taskList.splice(taskIndex, 1);
    } else {
      task.text = taskText;
      span.textContent = taskText;
    }
    saveTaskListToCache(taskList);
  }
}

// Function to update the task list cache
function updateTaskListCache() {
  const taskListContainer = document.getElementById('taskList');
  const taskItems = taskListContainer.getElementsByClassName('task-item');
  const taskList = [];

  for (let i = 0; i < taskItems.length; i++) {
    const taskItem = taskItems[i];
    const taskId = taskItem.dataset.id;
    const taskText = taskItem.querySelector('span').textContent;
    const completed = taskItem.classList.contains('done');

    taskList.push({
      id: taskId,
      text: taskText,
      completed: completed,
    });
  }

  saveTaskListToCache(taskList);
}

// Function to play the task done sound
function playTaskDoneSound() {
  const audio = new Audio('task-done.mp3');
  audio.play();
}

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskId = generateUUID();
    const taskListContainer = document.getElementById('taskList');
    const newTask = createTaskElement(taskId, taskText);
    taskListContainer.appendChild(newTask);
    updateTaskListCache();
    taskInput.value = '';
  }
}

// Function to clear all tasks
function clearTasks() {
  if (confirm('Are you sure you want to clear all tasks?')) {
    const taskListContainer = document.getElementById('taskList');
    taskListContainer.innerHTML = '';
    saveTaskListToCache([]);
  }
}

// Function to handle key press events
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // Enter key is pressed
    addTask();
  }
}

// Function to generate a random quote
function getRandomQuote() {
  // Array of quotes
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
    "The future depends on what you do today. - Mahatma Gandhi",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Dream big and dare to fail. - Norman Vaughan",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Do not wait for opportunity. Create it. - George Bernard Shaw",
    "The only way to do great work is to love what you do. - Steve Jobs",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to print the task list
function printTasks() {
  const taskListContainer = document.getElementById('taskList');
  const printContent = taskListContainer.cloneNode(true); // Clone the task list container

  // Remove input elements from the cloned task list container
  const inputElements = printContent.querySelectorAll('input[type="text"]');
  inputElements.forEach((input) => {
    input.parentNode.removeChild(input);
  });

  // Check the checkboxes for completed tasks
  const checkboxElements = printContent.querySelectorAll('input[type="checkbox"]');
  checkboxElements.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.setAttribute('checked', 'checked');
    }
  });

  const randomQuote = getRandomQuote();

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
    <head>
      <style>
      h1 {
        color: #555;
        font-size: 40px;
        margin-bottom: 30px;
      }

      p {
        font-size: 24px;
        margin-bottom: 20px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
      }

      li {
        margin-bottom: 20px;
        font-size: 26px;
        background-color: #FFCDD2; /* Red */
        padding: 10px;
        border-radius: 5px;
      }

      .task-item {
        display: flex;
        align-items: center;
      }

      .checkbox {
        margin-right: 10px;
      }

      .task-text {
        flex-grow: 1;
        font-size: 30px;
      }

      .done {
        text-decoration: line-through;
        background-color: #C8E6C9; /* Green */
      }

      .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #C8E6C9; /* Green */
        padding: 10px;
        font-size: 16px;
        color: #555;
        text-align: center;
      }

      .footer a {
        color: #555;
        text-decoration: none;
      }

      .footer a:hover {
        text-decoration: underline;
      }

      .quote {
        font-style: italic;
        font-size: 18px;
        margin-top: 20px;
      }

      .task-list-title {
        font-size: 36px;
        margin-bottom: 10px;
      }
      </style>
    </head>
    <body>
      <h1 class="task-list-title">Task List</h1>
      <p>${currentDate}</p>
      ${printContent.innerHTML}
      <div class="footer">
        <p class="quote">${randomQuote}</p>
        <p style="font-size: 14px; font-style: italic;">DazCheck &copy; 2023 | Made with <span class="heart">&hearts;</span> by <a href="https://zigaow.com" target="_blank">Zigao Wang</a></p>
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

// Event listeners
document.addEventListener('DOMContentLoaded', renderTaskListFromCache);
document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('clearTasksButton').addEventListener('click', clearTasks);
document.getElementById('printTasksButton').addEventListener('click', printTasks);
document.getElementById('taskInput').addEventListener('keypress', handleKeyPress);