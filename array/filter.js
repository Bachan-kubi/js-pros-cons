// let arr = [1, 2, 3, 4, 5, 6, 7];
// let filteredData = arr.filter(data=>data%2!==0);

// console.log(filteredData);

// function frankenSplice(arr1, arr2, n) {
//     let localArr =  arr2.slice(1, 2);
//     console.log(localArr);

//   }

//   frankenSplice([1, 2, 3], [4, 5, 6], 1);

// function mutation(arr) {
//   const arrOne = arr[1].toLowerCase();
//   const arrTwo = arr[0].toLowerCase();
//   for(let i = 0; i<arrOne.length; i++){
//     if(arrTwo.indexOf(arrOne[i])<0){
//       return false
//     }
//   }
//   return true;
// }

// mutation(["hello", "hey"]);

let arr = [
    {id: 1, name: "ki"},
    {id: 2, name: "kip"},
    {id: 3, name: "kik"},
    {id: 4, name: "kill"},
];

let newA = arr.filter(f=>{
    return (f.id === 4)
});
console.log(newA)

let mapi = ['kill', 'bachan', 'hisabnaiamar'];

let nMapi = mapi.map(m=>{
    return (m !== 'kill');
});
console.log(nMapi)