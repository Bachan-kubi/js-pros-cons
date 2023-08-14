// animal class created to make object 
class Animal{
    constructor(name, item){
        this.name = name;
        this.item= item;
        this.speed = 0;
        this.milkAmount = 0;
    }
    run(speed){
        console.log(`${this.name} run with the speed of ${speed}`);
    }
    stop(speed){
        console.log(`${this.name} stand still at ${speed} speed!`);
    }
}

const rabit = new Animal("Rabit");
// rabit.stop(0);
// rabit.run(25);

// 2 lets create another class with Anima class

class Dog extends Animal{
    eat(){
        console.log(`${this.name} eats ${this.item} daily!`);
    }
    hide(){
        console.log(`${this.name} hides! in jungle! and runs at speed of ${this.speed}`);
    }
}

// const dog = new Dog('Doly', 'rice');
// dog.run(10);
// dog.eat();


// dog.speed = 12;
// dog.hide();


class Cow extends Animal{
    produceMilk(){
        console.log(`${this.name} gives milk every day with ${this.milkAmount} liter everyday!`);
    }
    stop(){
        // setTimeout(()=>super.stop(this.speed), 1000);
        setTimeout(()=>super.stop(this.speed), 1000);
    }
    run(){
        // setTimeout(()=>super.stop(this.speed), 1000);
        setTimeout(()=>super.run(this.speed), 1000);
    }
}

const chada = new Cow('Red cow');
chada.run(10);
chada.milkAmount = 15;
chada.produceMilk();
chada.speed = 0;
chada.stop();
chada.speed = 8
chada.run();
