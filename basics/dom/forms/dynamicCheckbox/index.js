const colors = ["Red", "Green", "Blue", "Teal", "Yellow"];
colors.forEach(color=>{
    // generate id
    let id = `color-${color}`;
    // create label
    let label = document.createElement('label');
    label.setAttribute("for", id) 
    //create input 
    let input = document.createElement('input')
    input.type = "checkbox";
    input.name = color;
    input.value = color;
    input.id = id;
    // place input inside label
    label.appendChild(input);
    //creat a text node
    let text = document.createTextNode(color)
    // let h2 = document.createElement('h2');
    // h2.appendChild(text)
    label.appendChild(text);
    //add the label to the root
    let root = document.getElementById('root');
    root.appendChild(label);
})