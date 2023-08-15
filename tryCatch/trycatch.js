try{
    console.log('code will be here!');
   llll
    console.log('code executed!');
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log(error)
}

let user ={
    "name": "kubi",
    "age": "30"
}
console.log(JSON.stringify(user))
console.log(user.name);


// convert it by json stringify method to json 
let ami = {
    name: 'robi'
}
console.log(JSON.stringify(ami));

let uni = {
    "name": "kubi"
}
// console.log(JSON.parse(uni));

let iuser = {
    "name": "kubi",
    "age": "30"
};
let userJSON = JSON.stringify(iuser); // Convert the object to a JSON string
let parsedUser = JSON.parse(userJSON); // Parse the JSON string back to an object

console.log(parsedUser); // Output: "kubi"

let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr);

console.log(userObj);


// let userObj = {
//     name: "Sammy",
//     email: "sammy@example.com",
//     plan: "Pro"
//   };
//   let userStr = JSON.stringify(userObj);
//   console.log(userStr);


let final = '{"ami":"popy", "age": "45"}';
let jfinal = JSON.parse(final);
console.log(jfinal);
let m = JSON.stringify(jfinal);
console.log(m)
console.log(JSON.parse(m));
// console.log(m.ami);

let p ={
    b:"j",
}

console.log(JSON.stringify(p));
let o=JSON.stringify(p);
let q=JSON.parse(o);
console.log(q);


let rima = '{"name":"rima", "age": 30}';
let converted=JSON.parse(rima);
console.log(converted);

