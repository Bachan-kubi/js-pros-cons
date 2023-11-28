function getRGB(hexColor){
    // remove # character if its present
    hexColor = hexColor.replace("#", "");
    // parse hexColor component
    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);
    // construct rgb 
    let rgbColor = `RGB ${r},${g},${b}`;
    return rgbColor;
}

let hexColor = '#0000f';
let rgbRepresentation = getRGB(hexColor);
console.log(rgbRepresentation);

console.log(parseInt(1e1));
console.log(parseInt('1e1'));
console.log(parseFloat('1e1'));
console.log(isFinite(0/10));
console.log(isFinite(20/0));
console.log(isNaN(parseInt(NaN)));

var a = 1;
function f() {
 function n() {
 alert(a);
 }
 var a = 2;
 n();
}
f();