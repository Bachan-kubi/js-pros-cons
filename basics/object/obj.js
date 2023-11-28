let obj = new Object();
// with bracket notaion for adding properties to object
obj["ami"] = "tumi";
obj['name'] = 'kami';
// with dot notion
obj.age = 20;
console.log(obj);
// nested object or namespacing
// var Project={
//     Strings:{
//         Warnings:{
//             OutOfQuata:"You are out of Quoata!",
//             OutOfStock:"You are out of Stock!"
//         }
//     }
// }

// // console.log(Project.Strings.Warnings.OutOfQuata);
// // console.log(Project.Strings.Warnings.OutOfStock);

// // it will override on exsiting project 
// let Project = {
//     Widget:{}
// }
// // let javascript detect if existing then add 
// let Project = Project || {};
// Project.Widget = {};
// console.log(P);

// loop through the data
let datas = {
    name: 'kubi',
    age: 15,
    loves: 'smrity',
    hates: 'timtims',
}
for(key in datas){
    console.log(key);
    console.log(datas[key]);
    console.log(`i hate ${datas.name}`);
}
// constructor and fucntion class property
function Man(jari, mari, ari){
    this.name = 'kari';
}
class Human {
    constructor(pori, jori){
        this.name = 'kubi';
    }
}
let ami = new Human();
let a = new Man();
console.log(ami.name);
console.log(a.name);
// check how maani arguments needed
console.log(Man.length)
console.log(Human.length);

// method
let firstname = 'Bachan';
let person = function(name){
    firstname = name;
}
console.log(firstname);
person.apply({firstnamename: 'nai'});
console.log(person(firstname));


