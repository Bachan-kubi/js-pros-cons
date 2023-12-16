let names = 'kaku, maku, laku, chaku';
let arr1 = names.split(",");
console.log(arr1)


for(let name of arr1){
    console.log(`A message to ${name}`);
}

const newArr = 'hijol';
console.log(newArr.split("").length);
console.log(newArr.split(""));
console.log(arr1.join(","));

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current, initial, isArray) =>{
    console.log(current)
    console.log(sum)
    return ( sum + current, 0);
});

console.log(result);



