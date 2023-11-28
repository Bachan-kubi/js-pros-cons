class Arr extends Array{
    isEmpty(){
        return this.length ===0;
    }
}
let myArr = new Arr();
console.log(myArr.isEmpty())
// checking instances 
class Girl{};
let mita = new Girl();
console.log(mita instanceof Girl);
// constructor funtion
function Boys(){};
let ami = new Boys();
console.log(new Boys());
console.log(ami instanceof Boys )

// obj.__proto__ === Class.prototype?
// obj.__proto__.__proto__ === Class.prototype?
// obj.__proto__.__proto__.__proto__ === Class.prototype?
console.log(mita.__proto__ === Girl.prototype);
console.log(ami.__proto__ === Girl.prototype);

let obj={};
console.log(obj)
console.log(obj.toString())
// alert(obj)
const check = Object.prototype.toString;

const arry = 2;
console.log(check.call(arry));

