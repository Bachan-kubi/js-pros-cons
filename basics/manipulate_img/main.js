function hide() {
  let imga = document.getElementById("image");
  imga.classList.add("hidden");
}

let img = document.getElementById("img");
img.addEventListener("click", function () {
  img.classList.add("hiden");
});

let bigImg = document.getElementById("imgs");
bigImg.addEventListener("mouseover", function () {
  bigImg.classList.add('big');
});
bigImg.addEventListener("mouseout", function () {
  bigImg.classList.replace('big', 'small')
});

// function hide(id) {
//   var element = document.getElementById(id);
//   element.parentNode.removeChild(element);

//   var remainingImages = document.getElementsByTagName("img");
//   var widthPercentage = 100 / remainingImages.length;

//   for (var i = 0; i < remainingImages.length; i++) {
//     remainingImages[i].style.width = widthPercentage + "%";
//   }
// }

const tr = document.getElementById("txt");
tr.addEventListener("mouseover", function () {
  tr.classList.add("txt-two");
});
tr.addEventListener('mouseout', function(){
    tr.classList.replace('txt-two', 't');
});

let ss = document.getElementById('ss');

ss.addEventListener('mouseover', function (){
    ss.src = './img/bkk-removebg-preview.png';
});
ss.addEventListener('mouseout', function (){
    ss.src = './img/bkk.jpg';
});

// tag name
// let tag = document.getElementsByTagName('h2');
// tag.innerHTML;
// console.log(tag)
// console.log(tag);
// for(let i=0; i<tag.length; i++){
//     console.log(tag[2]);
//     let content = tag[1].innerHTML;
//     console.log(content)
//     tag[i].style.backgroundColor = 'red';
// }

// var p = document.getElementsByTagName("p");
// var contents = p[3].innerHTML;
// console.log(contents);

const d = document.getElementById('cal');
const n = document.getElementById('ny');
// let c = d.childNodes[1];
let c = d.parentNode;
c.innerHTML;



const par = document.getElementById('parents');
console.log(par);
// const u = par.nodeName;
const u = par.innerHTML;
console.log(u)
const k = par.firstChild;
console.log(k)






