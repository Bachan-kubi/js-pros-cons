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

class Cat extends Animal{
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
}

const pusy = new Cat('Black cat', 10);
console.log(pusy.name);
console.log(pusy.earLength);

// override class fields

class Human{
    name = 'kubi';
    constructor(){
        console.log(this.name);
    }
}

class Fatem extends Human{
    name = 'Fatema';
}
let timtim = new Fatem();
// console.log(timtim);
console.log(new Fatem());
// console.log(new Human());




class Animal {
    name = 'animal';
  
    constructor() {
      console.log(this.name); 
    }
  }
  
  class Rabbit extends Animal {
    name = 'rabbit';
  }
  
  new Animal(); // animal
  console.log(new Rabbit());
  console.log(new Animal());







