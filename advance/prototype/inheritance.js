// prototype based inheritance 
const Person = function(name, age, job){
    this.name = name,
    this.age = age,
    this.job = job
}

Person.prototype.dateOfBirth = function(){
    console.log(`${this.name} was borne in ${2023-this.age}`)
}
let kubi = new Person('kubi', 50, "methor")
kubi.dateOfBirth();

