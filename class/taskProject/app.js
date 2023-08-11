class Task{
    constructor(name, description, dueDate){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }
    toggleCompleted(){
        this.completed= !this.completed;
    }
}
class TaskManager{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(index){
        this.tasks.splice(index, 1)
    }
    markTaskCompleted(index){
        this.tasks[index].toggleCompleted();
    }
}


// submission form
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

const myManager = new TaskManager();

taskForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('due-date').value;
    
    const task = new Task(name, description, dueDate);

    myManager.addTask(task);
    updateTask();
    taskForm.reset();
});

function updateTask(){
    taskList.innerHTML = '';
    myManager.tasks.forEach((task, index)=>{
        console.log(task, index);
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
        <h2>${task.name}</h2>
        <hh4>${task.description}</hh4>
        <h6>${task.dueDate}</h6>
        <button class="complete-btn" onclick="toggleCompletedTask(${index})">${task.completed ? "mark Incompleted": "mark completed"}</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

function toggleCompletedTask(index){
    myManager.markTaskCompleted(index);
    updateTask();
}
function deleteTask(index){
    myManager.removeTask(index);
    updateTask();
}

updateTask();

// class Task {
//     constructor(name, description, dueDate) {
//         this.name = name;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.completed = false;
//     }

//     toggleCompleted() {
//         this.completed = !this.completed;
//     }
// }

// class TaskManager {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(task) {
//         this.tasks.push(task);
//     }

//     removeTask(index) {
//         this.tasks.splice(index, 1);
//     }

//     markTaskCompleted(index) {
//         this.tasks[index].toggleCompleted();
//     }
// }

// const taskForm = document.getElementById('task-form');
// const taskList = document.getElementById('task-list');

// const myManager = new TaskManager();

// taskForm.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('task-name').value;
//     const description = document.getElementById('task-description').value;
//     const dueDate = document.getElementById('due-date').value;

//     const task = new Task(name, description, dueDate);

//     myManager.addTask(task);
//     updateTask();
//     taskForm.reset();
// });

// function updateTask() {
//     taskList.innerHTML = '';
//     myManager.tasks.forEach((task, index) => {
//         const taskDiv = document.createElement('div');
//         taskDiv.classList.add('task');
//         taskDiv.innerHTML = `
//             <h2>${task.name}</h2>
//             <h4>${task.description}</h4>
//             <h6>${task.dueDate}</h6>
//             <button class="complete-btn" onclick="toggleCompletedTask(${index})">${task.completed ? "Mark Incompleted" : "Mark Completed"}</button>
//             <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//         `;
//         taskList.appendChild(taskDiv);
//     });
// }

// function toggleCompletedTask(index) {
//     myManager.markTaskCompleted(index);
//     updateTask();
// }

// function deleteTask(index) {
//     myManager.removeTask(index);
//     updateTask();
// }

// updateTask();





