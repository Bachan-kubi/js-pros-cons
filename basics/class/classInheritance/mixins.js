//create an object-2 
const mixings = {
    sayHi(){
        console.log(`Hellow ${this.name}`)
    },
    sayBye(){
        console.log(`${this.name}, goodbye!`)
    },
    eat(){
        console.log(`${this.name}, come and eat!`);
    }
}

//create class-2
class User{
    constructor(name){
        this.name = name;
    }
}
// copy method-3
// console.log(User);
console.log(Object.assign(User.prototype, mixings));

//4 create new object
const munna = new User('Munna');
munna.sayBye();
munna.sayHi();
munna.eat();

const masum = new User('Masum');
masum.eat();

const eagle = new User('Eangle');
eagle.sayBye();


const church= {
    // worship(){
    //     console.log(`${this.member} worship in church on Sunday at !`);
    // },
    // closeWorship(){
    //     console.log(`${this.member} close their worship at  pm.`);
    // }
    worship(time){
        console.log(`${this.member} worship in church on Sunday at ${time} !`);
    },
    closeWorship(time){
        console.log(`${this.member} close their worship at ${time} pm.`);
    }
}

class Member{
    constructor(member, time){
        this.member = member;
        this.time = time
    }
}

Object.assign(Member.prototype, church);
console.log(Object.assign(Member.prototype, church));

let kubi = new Member('Alaka', 10);

kubi.worship(kubi.time);
kubi.closeWorship(kubi.time);




