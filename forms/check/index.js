// let cb = document.getElementById('accept');
// let cb = document.getElementById('accept:checked');
// console.log(cb)

let cb = document.getElementById('accept');
let btn = document.getElementById('btn');
function handleCheck(e){
    e.preventDefault();
    console.log(cb.value)
}
btn.addEventListener('submit', handleCheck)
// let cb = document.getElementById('accept');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', (e)=>{
//     console.log(cb.value)
// })

let colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', (e)=>{
    const checkBoxes = document.querySelectorAll('input[name="color"]:checked');
    console.log(checkBoxes)
    let values = [];
    checkBoxes.forEach(checkbox=>{
        values.push(checkbox.value);
    });
    alert(values);
    console.log(values);
});

// country codes
// let countryBtn = document.getElementById('uBtn');

// function check(checked = true){
//     const countries = document.querySelectorAll('input[name="country"]');
//     console.log(countries);
//     countries.forEach(country=>{
//         country.checked = checked;
//     });
// };

// function checkAll(){
//     check();
//     this.onclick = unCheckAll;
// };
// function unCheckAll(){
//     check();
//     this.onclick = checkAll;
// };
// countryBtn.onclick = checkAll;

const colors = ["Red","Green","Blue"];
        colors.forEach((color)=>{
            //  generate id
            const id = `color-${color}`;

            // create a label
            const label = document.createElement('label');
            label.setAttribute("for", id);
           
            // create a checkbox
            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "color";
            checkbox.value = color;
            checkbox.id = id;

            // place the checkbox inside a label
            label.appendChild(checkbox);
            // create text node
            label.appendChild(document.createTextNode(color));
            // add the label to the root
            document.querySelector("#root").appendChild(label);
        });
