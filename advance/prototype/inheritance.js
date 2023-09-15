// prototype based inheritance 
const Person = function(name, age, job){
    this.name = name,
    this.age = age,
    this.job = job
}
Person.prototype.dateOfBirth = function(){
    console.log(`${this.name} was borne in ${2023-this.age}`)
}


let kubi = new Person('Bachan Kubi', 40, "Web Developer!");
kubi.dateOfBirth();

// constructor inheritance
let Ramesh = function(name, age, job, subject){
    Person.call(this, name, age, job),
    this.subject= subject
}

let rahim = new Ramesh('Ramesh', 52, "Teacher", 'Bangla');
console.log(rahim)

const GeneralPeople = function(name, age, address){
    this.name = name,
    this.age = age,
    this.addresse = address
}


let Athlet = function(name, age, address, prize){
    GeneralPeople.call(this, name, age, address),
    this.prize = prize || 100;
}
let ami = new Athlet("kubi", 20, 'jj', 100 );
console.log(ami);

