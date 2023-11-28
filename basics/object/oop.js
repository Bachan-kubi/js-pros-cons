// console.dir(document);
// console.log(document.location);

// let good = {
//     name: 'kubi'
// }
// console.log(good['name'])


// let employee = {
//     name: "Ronnell Jones",
//     lastName: 'Kubi',
//     position: "manager",
//     bio: function(){
//         return (`${this.name} ${this.lastName} ${this.position}`)
//     }
// }
// console.log(employee.bio());

// const foo = {kk:'kk'};
// const bar = new Object();
// const far = Object.create();



let car = {};
Object.defineProperty(car, 'wheels', {
    configurable: true,
    value: 4
});
Object.defineProperty(car, 'doors', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: 4
});

console.log(Object.getOwnPropertyDescriptor(car, 'doors'));
console.log(Object.getOwnPropertyNames(car));
// delete car.wheels;
// console.log(car.wheels);

console.log(Object.getPrototypeOf(car)=== Object.prototype && Object.prototype === car.__proto__);




