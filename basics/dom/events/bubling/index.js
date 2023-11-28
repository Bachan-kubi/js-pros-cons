const body = document.getElementsByTagName('body')[0];
const div = document.getElementsByTagName('div')[0];
const span = document.getElementsByTagName('span')[0];
const button = document.getElementsByTagName('button')[0];

body.addEventListener('click', ()=>{
console.log('body is clicked!')
});
div.addEventListener('click', ()=>{
console.log('div is clicked!')
});
span.addEventListener('click', (event)=>{
    // to stop event bubling or propogation
    event.stopPropagation()
console.log('span is clicked!')
});
button.addEventListener('click', ()=>{
console.log('button is clicked!')
});

var parent = document.querySelector('.parent')
    console.log(parent.childNodes) // returns a list of all child nodes
    console.log(parent.children)   // returns a list of child **element** nodes only