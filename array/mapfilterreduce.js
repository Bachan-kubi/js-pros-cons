let arr = [1, 2, 3, 4, 5, 6, 7];
function c(items){
    return items*items;
}
// c(arr);

let r = arr.map(c);
console.log(r);

let a = arr.map(item=>{
    return item*item;
});
console.log(a);

let myArr = [];
for(let i = 0; i<arr.length; i++){
    myArr.push(arr[i]* arr[i]);
}
console.log(myArr);

// filter method
let fil = arr.filter((i, index, arr)=>{
    
    console.log("item: ", i, "index: ", index, "Array ", arr)
})
// console.log(fil);

let rduce = [1, 2, 3];
let cal = rduce.reduce((total, item)=>{
    console.log(total, item)
    return(
        total += item
    )
}, 0);
console.log(cal);

