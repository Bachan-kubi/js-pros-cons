// we create object with object literals
// let p1 = {
//     name: 'Basic',
//     price: 3.5,
//     space: 10,
//     data: 1000,
//     page: 10
// }

// constructor fucntion - system 1

// function Plan(param){
//     console.log(param)
//     this.name= param.name;
//     this.price = param.price;
//     this.space = param.space;
//     this.data = param.data;
//     this.page = param.page;
// };

// let p1 = new Plan({name: 'Basic', price
// : 3.5, space: 10, data: 1000, page: 10});


// constructor fucntion - system 1

function Plan(name, price, space, data, page){
    // console.log(param)
    this.name= name;
    this.price = price;
    this.space = space;
    this.data = data;
    this.page = page;
};

let p1 = new Plan('Basic', 3.5,10, 1000, 10);
let p2 = new Plan('pro', 3.5,10, 1000, 10);
let p3 = new Plan('Ultimate', 3.5,10, 1000, 10);
console.log(p1, p2, p3);





