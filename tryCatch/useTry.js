// let json = '{bad json}';
// let json = '{"age":20}';
// try{
//     let user = JSON.parse(json);
//     console.log(use);
// }catch(err){
//     // console.log(err.stack,"our apology that we cant get right data right now");
//     // console.log('wont execute!')
//     console.log(err.name);
//     console.log(err.stack);
// }

// let user = '{age:20}';
// try{
//     let c = JSON.parse(user);
//     if(!c.name){
//         throw new SyntaxError('incomeple data: no name')
//     }
//     console.log(c.name);
// }catch(e){
//     console.log("json error :", e.message);
// }

// let bison = '{"name":"kubi"}';
// try{
//     let user = JSON.parse(bison);
//     console.log(use)
// }catch(e){
//     if(e instanceof ReferenceError){
//         console.log('referenceError!')
//     }
// }

let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms` );