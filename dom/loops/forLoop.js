//01 for loop 
// for(let i=1; i<=10; i++){
//     // console.log('run '+ i+ ' steps' )
// }

// 02 do while loop
// let i=0;
// let msg = 'This is do while looop!';
// let loops = document.getElementById('showLoop');
// do{
//     // console.log('inside')
//     // loops.innerHTML += `
//     // // <h2>${msg}</h2>`;
//     // // i++;
// } while(i<=20);
// // console.log('outside');

// 03 while loop
// let n=10;
// while(n<=9){
//     console.log('while loop!');
//     n = prompt('Enter number');
//     n++;
// }
// console.log('outside loop!');



var name = 'Zonayed';

function first() {
   var welcome = 'Hello ';
   second();
   console.log(welcome + name);
}

function second() {
   var welcome2 = 'Hi! ';
   third();
   console.log(welcome2 + name);
}

function third() {
   var welcome3 = 'Hey! ';
   console.log(welcome3 + name);
}

first();

let a = 10;
let b = 20;
let c = a<b ? 100: 200;
console.log(c)


