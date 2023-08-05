const h2 = document.getElementsByTagName('h2');
console.log(h2);
for(let h of h2){
    console.log(h)
    h.style.color = 'green';
}
// insertion method
let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = `<p><strong>Hi, there</strong>, you have got a strong message.</p>`;
document.body.append(div);

