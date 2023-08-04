class Person{
    constructor(params){
        this.name = params.name;
        this.age = params.age;
        this.email = params.email;
        this.phone = params.phone;
    }
    getName(){
        return (
            `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Phone: ${this.phone}`
            );
    };
};
let bachan = new Person({name: 'Kubi', age: 30, email: 'kubi@gmail.com', phone: '0123456'});
let hilly = new Person({name: 'Hily', age: 30, email: 'hily@yahoo.com', phone: '014789'});
let moly = new Person({name: "molu", email:'koli@gmail.com'});
console.log(hilly.getName());
document.getElementById('dis').innerHTML = bachan;