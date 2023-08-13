// function Person(name, address){
//     this.name= name,
//     this.address= address
// }
// Person.prototype.gender;
// let ami = new Person({name: 'rubi', address: 'nal', gender: 'male'});
// let a = new Person({name: 'ru', address: 'na'});
// console.log(ami);


// function Customer(){
//     this.name = 'John';
//     this.age = 25;
// }

// Customer.prototype.greet = function(){
//     return `Hellow ${this.name}`
// };
// let his = new Customer

// console.log(his.greet())


function Animal(name, species) {
    this.name = name;
    this.species = species;
    };
    Animal.prototype.makeSound = function() {
    console.log("The animal makes a sound.");
    };
    Animal.prototype.move = function() {
    console.log("The animal moves around.");
    };
    
    // ```
    // This class has two methods: `makeSound()` and `move()`. These methods will be inherited by all child classes.
    // 1. Create child classes for different animals:
    // ```
    function Dog(name, species) {
    this.name = name;
    this.species = species;
    this.bark = true;
    }
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    Dog.prototype.makeSound = function() {
    console.log("Woof!");
    };
    function Cat(name, species) {
    this.name = name;
    this.species = species;
    this.purr = true;
    }
    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.constructor = Cat;
    Cat.prototype.makeSound = function() {
    console.log("Meow!");
    };
    function Bird(name, species) {
    this.name = name;
    this.species = species;
    this.fly = true;
    }
    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;
    Bird.prototype.makeSound = function() {
    console.log("Tweet!");
    };


    // Each child class has its own unique properties and methods, but they all share the `name` and `species` properties, which are inherited from the `Animal` class.
    // 1. Create a main function that instantiates and uses the animal classes:
    // ```
    let myDog = new Dog("Fido", "Canis lupus familiaris");
    let myCat = new Cat("Whiskers", "Felis catus");
    let myBird = new Bird("Tweety", "Aves");
    console.log(myDog.name + " is a " + myDog.species);
    console.log(myCat.name + " is a " + myCat.species);
    console.log(myBird.name + " is a " + myBird.species);
    myDog.makeSound();



