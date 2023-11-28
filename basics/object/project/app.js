var tasks;
tasks = [
  {
    text: "Pay phone bill",
    complete: false,
    priority: 1,
  },
  {
    text: "Write best-selling novel",
    complete: false,
    priority: 3,
  },
  {
    text: "Walk the dog",
    complete: false,
    priority: 2,
  },
];

let allData = [];
const addTasks = function(task){
    allData.push(task);
}
tasks.forEach(task=>{
    addTasks(task);
});

let displayData = '';
let newData = allData.map(data=>{
    console.log(data);
    displayData += `
        <h3>${data.text}</h3>
        <h3>${data.complete}</h3>
        <h3>${data.priority}</h3>
    `
});
document.getElementById('dis').innerHTML = displayData;
