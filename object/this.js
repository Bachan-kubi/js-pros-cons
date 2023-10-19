// let myVar = 100;
// function ThisClass(){
//     let myVar = 200;
//     console.log(myVar);
//     console.log(this.myVar);
// };

// ThisClass();
// let obj = new ThisClass();
// console.log(obj.myVar);

// var myVar = 100;

// function WhoIsThis() {
//     var myVar = 200;

//     // alert(myVar); // 200
//     // alert(this.myVar); // 100
//     console.log(myVar);
//     console.log(this.myVar); 
// }

// WhoIsThis(); // inferred as window.WhoIsThis()

// // var obj = new WhoIsThis();
// // alert(obj.myVar); 

// console.log('I love you '.repeat(10));
// if('abc'.endsWith('c')){
//     console.log('The abc ends with C')
// }else{
//     console.log('The abc dont have c letter.')
// }
// console.log('first'.indexOf('t'));
// console.log('javascript'.replace('java', 'ecma'))

//01 globar rules
// console.log(this);
//02 object rules
// function helloThis(){
//     this.name = 'kubi'
//     console.log(this.name);
// }
// helloThis();

// let myObj = {
//     name:'bachan',
//     age: 25,
//     email:"email@email.com",
//     fullName: function (){
//         // console.log(`my name is ${this.name}, ${this.age} and ${this.email}`)
//         this.lastName= 'kubi';
//         this.f = function(){
//             console.log(this);
//         }
//         return this;
//     }
// }
// // myObj.fullName().value.call(myObj);
// myObj.fullName().f.call(myObj)

// // let myObj = {
// //     name: 'bachan',
// //     age: 25,
// //     email: "email@email.com",
// //     fullName: function () {
// //         this.lastName = 'kubi'; // Define lastName property
// //         this.f = function () {
// //             console.log(this);
// //         };
// //         return this;
// //     }
// // }

// // myObj.fullName().f.call(myObj);



// function thisMia(){
//     console.log(this)
// }
// thisMia();

let ami = {
    name: 'kubi',
    age: 20,
    country: 'dhaka',
    fullAmi: function(){
        console.log(`My name is ${this.name}, age ${this.age} and ${this.country}`)
    },
    fullStory: {
            name: 'rupa',
            age: 20,
            msg: function(){
                console.log(`we r ${this.name}, ${this.age}`)
            }

    }
}
ami.fullStory.msg();

let btn = document.getElementById("btn");
// btn.onclick = function(){
//     console.log('I got first click!');
// }
btn.addEventListener('click', ()=>{
    console.log('clickable button!');
});

let link = document.getElementById('link');
link.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('ok got i')
});

