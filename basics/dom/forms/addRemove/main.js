const button = document.getElementById('btn');
const fr = document.getElementById('fr');
console.log(fr)
console.log(document.getElementsByTagName('select'))
let o = fr.options;
console.log(o)

button.addEventListener('click', (e)=>{
   
    e.preventDefault();
    let show = document.getElementById('show');
    let selectedItems = fr.options[fr.selectedIndex];
    console.log(selectedItems)
    // show.innerHTML = selectedItems.textContent;
    show.innerHTML += selectedItems.textContent;
});
// button.addEventListener('click', (e)=>{
   
//     e.preventDefault();
//     let show = document.getElementById('show');
//     console.log(fr);
//     show.innerHTML = fr.textContent;
//     console.log(fr.selectedIndex);
//     console.log(fr.value);
// });
