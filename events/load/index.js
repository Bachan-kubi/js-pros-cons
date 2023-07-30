window.addEventListener('load', (event)=>{
    console.log('doc loaded!')
});
window.onload = (e)=>{
    console.log('fired!')
};

// const button = document.getElementById('btn');
// button.addEventListener('click', (e)=>{
//     let show = document.getElementById('show')
//     show.innerHTML = 'you clicke me!'
// });
const button = document.getElementById('btn');
button.onmouseenter = (e)=>{
    let show = document.getElementById('show');
    show.innerHTML = 'you clicke me!'
}
// button.onmouseout = (e)=>{
//     let show = document.getElementById('show');
//     show.innerHTML = 'you clicke me!'
// }
// button.onmouseover = (e)=>{
//     let show = document.getElementById('show');
//     show.innerHTML = 'you clicke me!'
// }
// button.onclick = (e)=>{
//     let show = document.getElementById('show');
//     show.innerHTML = 'you clicke me!'
// }

let track = document.getElementById('track');
track.addEventListener('mousemove', (e)=>{
    let display = document.getElementById('display');
    display.innerHTML = `
    screen X/Y: (${e.clientX}, ${e.clientY})
    client X/Y: (${e.clientX}, ${e.clientY})
    `
})