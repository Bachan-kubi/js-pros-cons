const arr = [1, 2, 3, 4, 5];
const arr1 = ["Kill", "Bill", "Jhil", "Shill"];

arr.splice(0, 1);
console.log(arr);

// add items
// arr1.splice(0,2, "ok", "boke");
arr1.splice(0,2);
console.log(arr1);

// removed items 
 const re = arr.splice(0, 2);
 console.log(re);
// insert with splice- to insert items in array delete count set to 0;
 const insert = ["I", "Love", "MIti"];
 insert.splice(1, 0, "hate", "me");
 console.log(insert);

 // negative 
 let ami = [2, 4, 5, 10, 11, 12];
//  ami.splice(-1, 0, 9);
let hi = ami.slice(0, 4)
 console.log(hi)




