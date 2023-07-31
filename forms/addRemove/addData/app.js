const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const list = document.getElementById("list");
const framework = document.getElementById("framework");
const removeAll = document.getElementById('removeAll');

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (framework.value == "") {
    alert("please enter values!");
    return;
  } else {
    let option = new Option(framework.value, framework.value);
    list.add(option, undefined);
    console.log(list)
    framework.value = "";
    framework.focus();
  }
});

removeButton.addEventListener("click", (e) => {
  e.preventDefault();
  let selected = list.options[list.selectedIndex];
  
  if (selected) {
    let shouldRemove = confirm("Are you Sure?");
    if (shouldRemove) {
      selected.remove(list.selectedIndex);
    }
  } else {
    alert("Please select one!");
  }
});

removeAll.addEventListener('click', (e)=>{
  let shouldRemoveAll = confirm('Do you want to remove all?');
  if(shouldRemoveAll){
    while(list.options.length>0){
      list.remove(0);
    }
  }
})
