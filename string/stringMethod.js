// let reg = /[A-Z]/;
// let reg = 'bachan';
// let names = 'Bachan Kubi';
// let result = names.search(reg);
// let result = names.indexOf('K');
// console.log(result)

// to count occurance

let str = 'Do you know you dont know know until you know know!';
let subStr = 'know';

let count = 0;
let index = str.indexOf(subStr);

while(index !== -1){
    count++;
    index = str.indexOf(subStr, index+1)
};
console.log(count);



