// alert('hellow');
// [1,2].forEach(alert);
// alert('hellow');
// [1,2].forEach(alert);

const colorButton =document.getElementById('colorBtn');
colorButton.addEventListener('click', ()=>{
    const container = document.getElementById('container');
    const c = document.querySelector('.c');
    c.style.display = 'block';
    // container.innerHTML = `<h1>Change background color</h1>`
    container.style.width = '150px';
    container.style.height = '150px';
    container.style.backgroundColor = 'red';
});

// function canPay(changeArray, totalDue) {
//     let sum = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         sum += changeArray[i];
//         if (sum >= totalDue) {
//             return true;
//         }
//     }
//     return false;
// }

// let result = canPay([1, 5, 5], 10);
// console.log(result);

function canPay(changeArray, totalDue) {
    //validate input element
    if (changeArray.length === 0 || changeArray[0] === undefined) {
        // console.log(changeArray.length)
        alert("please put the first input element");
        return false;
    }
    // calculation of true and false
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        console.log(changeArray[i]);
        sum += changeArray[i];
        console.log(sum);
        if (sum >= totalDue) {
            return true;
        }
    }
    return false;
}

let result = canPay([1,5,5], 10);
console.log(result);

let age = null;
let c;
console.log(null, c);

let a=10;
if(a===undefined){
    console.log('value is undefined!')
}else{
    console.log('ten')
}







