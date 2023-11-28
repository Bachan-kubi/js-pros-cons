//create number object
let n =new Number(2);
console.log(n);
if(n.valueOf()===2){
    console.log("We are same number!");
}else{
    console.log('we dont');
};
// check types
console.log(typeof parseFloat("2"));
console.log(typeof parseInt("2"));
console.log(typeof parseFloat(n));
let arr = [10, 20];
console.log(arr.indexOf())