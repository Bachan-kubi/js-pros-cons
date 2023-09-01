// let myVar = 100;
// function ThisClass(){
//     let myVar = 200;
//     console.log(myVar);
//     console.log(this.myVar);
// };

// ThisClass();
// let obj = new ThisClass();
// console.log(obj.myVar);

var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    // alert(myVar); // 200
    // alert(this.myVar); // 100
    console.log(myVar);
    console.log(this.myVar); 
}

WhoIsThis(); // inferred as window.WhoIsThis()

// var obj = new WhoIsThis();
// alert(obj.myVar); 

console.log('I love you '.repeat(10));
if('abc'.endsWith('c')){
    console.log('The abc ends with C')
}else{
    console.log('The abc dont have c letter.')
}
console.log('first'.indexOf('t'));
console.log('javascript'.replace('java', 'ecma'))

