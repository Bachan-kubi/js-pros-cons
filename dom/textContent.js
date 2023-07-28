let main = document.getElementById('main');
// let text = main.textContent;
let text = main.innerText;
console.log(text)

let note = document.getElementById('note');
console.log(note.textContent);

// fragement 
let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala', 'flatter'];
let language = document.getElementById('language');
let fragement = new DocumentFragment();
console.log(fragement)
languages.forEach(lang=>{
    let li = document.createElement('li');
    li.innerHTML = lang;
    fragement.appendChild(li);
});
language.appendChild(fragement);
language.style.color = 'red';
