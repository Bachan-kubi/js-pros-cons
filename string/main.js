// slice/substring - takes two parameters, start poing and end end point will be a string before second parameter 
let string = 'bachan';
let newString = string.substring(1, 3)
console.log(newString);


let p = 'mourashi';
let newP = p.substring(2, 3);
console.log(newP);


let gbc = 'garo baptist convention';
let s = gbc.substring(2, 5);
console.log(s)

console.log(' hellow '.trim());

function findOccuranceOfSubstring(string, substring){
    let occuranceCount = 0, position=0;
    while(position=string.indexOf(substring, position)!==-1){
        occuranceCount++;
        position+=substring.length;
    }
    return occuranceCount;
}


