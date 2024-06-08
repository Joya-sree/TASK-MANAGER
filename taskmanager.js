function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskText = taskInput.value;
    const priority = prioritySelect.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = priority === 'important' ? document.getElementById('importantTasks') : document.getElementById('lessImportantTasks');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    taskList.appendChild(li);
    taskInput.value = '';
}