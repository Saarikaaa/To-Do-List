document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDueDate = document.getElementById('taskDueDate');
    const taskReminder = document.getElementById('taskReminder');
    const taskList = document.getElementById('taskList');

    const taskText = taskInput.value;
    const dueDate = taskDueDate.value;
    const reminderTime = taskReminder.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    // Checkbox for marking the task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('taskCheckbox');

    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const taskTextSpan = document.createElement('strong');
    taskTextSpan.textContent = taskText;

    const taskDueDateSpan = document.createElement('span');
    taskDueDateSpan.classList.add('date-box');
    taskDueDateSpan.textContent = `Due: ${dueDate}`;

    const taskReminderSpan = document.createElement('span');
    taskReminderSpan.classList.add('reminder-box');
    taskReminderSpan.textContent = `Reminder: ${reminderTime}`;

    const detailsBoxes = document.createElement('div');
    detailsBoxes.classList.add('details-boxes');
    detailsBoxes.appendChild(taskDueDateSpan);
    detailsBoxes.appendChild(taskReminderSpan);

    taskDetails.appendChild(taskTextSpan);
    taskDetails.appendChild(detailsBoxes);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskDetails);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    // Clear input fields after adding the task
    taskInput.value = '';
    taskDueDate.value = '';
    taskReminder.value = '';
});
