const STORAGE_KEY = 'js-todo-app.tasks';

const state = {
  tasks: [],
  filter: 'all',
};

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const filterButtons = document.querySelectorAll('.filter-btn');

function loadTasks() {
  try {
    const storedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    state.tasks = Array.isArray(storedTasks) ? storedTasks : [];
  } catch (error) {
    state.tasks = [];
    console.error('Unable to load tasks:', error);
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
}

function createTask(text) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text,
    completed: false,
  };
}

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    taskInput.focus();
    return;
  }

  state.tasks.unshift(createTask(text));
  saveTasks();
  taskInput.value = '';
  render();
}

function toggleTask(id) {
  state.tasks = state.tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks();
  render();
}

function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  saveTasks();
  render();
}

function getVisibleTasks() {
  if (state.filter === 'completed') {
    return state.tasks.filter((task) => task.completed);
  }

  if (state.filter === 'active') {
    return state.tasks.filter((task) => !task.completed);
  }

  return state.tasks;
}

function render() {
  const visibleTasks = getVisibleTasks();

  if (!visibleTasks.length) {
    taskList.innerHTML = '';
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  taskList.innerHTML = visibleTasks
    .map(
      (task) => `
        <li class="task-item ${task.completed ? 'completed' : ''}">
          <label class="task-main">
            <input type="checkbox" ${task.completed ? 'checked' : ''} data-action="toggle" data-id="${task.id}" />
            <span class="task-text">${task.text}</span>
          </label>
          <button class="delete-btn" type="button" data-action="delete" data-id="${task.id}">
            Delete
          </button>
        </li>
      `
    )
    .join('');
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTask();
  }
});

taskList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  const checkbox = event.target.closest('input[data-action]');

  if (button) {
    const { action, id } = button.dataset;
    if (action === 'delete') {
      deleteTask(id);
    }
  }

  if (checkbox) {
    const { action, id } = checkbox.dataset;
    if (action === 'toggle') {
      toggleTask(id);
    }
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    render();
  });
});

loadTasks();
render();
