// function to find greatest common divisor
// function gcd(a, b){
//     while(b!==0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
    
// }

// function lcm(arr){
//     arr.sort((a , b)=>a-b);
//     // create array to store all numbers in range
//     let range = [];
//     for(let i=arr[0]; i<=arr[1]; i++){
//         range.push(i);
//     }
//     // initialize lcm
//     let scm = range[0]
//     for(let i=0;i<range.length; i++){
//         let currentNum = range[i];
//         let currentGcd = gcd(scm, currentNum);
//         scm = (scm*currentNum)/ currentGcd;
//     }
//     return scm;
// }

// console.log(lcm([5,6]));

// function dropElements(arr, func) {
//     while(arr.length>0&& !func(arr[0])){
//         console.log(arr.shift())
//     return arr.shift();
//     }
//     // console.log(arr);
//   return arr;
//   }
  
//   dropElements([1, 2, 3], function(n) {return n < 3; });

function steamrollArray(arr) {
    for(let i=0;i<arr.length; i++){
        console.log(arr[i])
    }
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

  function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

