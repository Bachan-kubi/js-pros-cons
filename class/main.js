//ECMAScript 5 class
var Human = function Human(name) {
  this.name = name;
};
Human.prototype.sayGoodNight = function () {
  return "Say Goodnight " + this.name;
};
var george = new Human("Gracie");
console.log(george.sayGoodNight());


//ECMAScript 6 class
class Greeting {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return "Hellooo " + this.name;
  }
}
var yakko = new Greeting("Nurse!");
console.log(yakko.sayHello());

