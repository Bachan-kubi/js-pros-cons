
const showTasks = [];

const renderTask = ()=>{
    const tasks = document.getElementById('tasks');
    tasks.innerHTML = '';

    showTasks.forEach((task, index)=>{
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onClick="removeTask(${index})">Romove Task</button>`;
        tasks.appendChild(li);
    })
}
renderTask();
const addTask = ()=>{
    const allTasks = document.getElementById('allTask');
    const newValue = allTasks.value.trim();
    console.log(newValue);
    if(newValue !== ''){
        showTasks.push(newValue);
        allTasks.value = '';
        renderTask();
    }
}

const removeTask = (index)=>{
    showTasks.splice(index, 1);
    renderTask();
}