const addButton = document.getElementById("addBtn");
const removeButton = document.getElementById("removeBtn");
const list = document.getElementById("list");
const framework = document.getElementById("framework");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (framework.value == "") {
    alert("please enter values!");
    return;
  } else {
    let option = new Option(framework.value, framework.value);
    list.add(option, undefined);
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
