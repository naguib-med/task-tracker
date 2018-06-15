document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    taskItem.appendChild(document.createTextNode(taskText));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(taskItem);
    taskInput.value = '';
});
