function Person(name, address){
    this.name= name,
    this.address= address
}
Person.prototype.gender;
let ami = new Person({name: 'rubi', address: 'nal', gender: 'male'});
let a = new Person({name: 'ru', address: 'na'});
console.log(ami);


function Customer(){
    this.name = 'John';
    this.age = 25;
}

Customer.prototype.greet = function(){
    return `Hellow ${this.name}`
};
let his = new Customer

console.log(his.greet())