// let main = document.getElementById('main');
// // let text = main.textContent;
// let text = main.innerText;
// console.log(text)

// let note = document.getElementById('note');
// console.log(note.textContent);
// innterText vs innterHTML vs textContent
// fragement 
// let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala', 'flatter'];
// let language = document.getElementById('language');
// let fragement = new DocumentFragment();
// console.log(fragement)
// languages.forEach(lang=>{
//     let li = document.createElement('li');
//     li.innerHTML = lang;
//     fragement.appendChild(li);
// });
// language.appendChild(fragement);
// language.style.color = 'red';

// before/after method

// function insertAfter(newNode, existingNode){
//     console.log(existingNode.parentNode)
//     existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling)
// }

// let p = document.getElementById('placeBefore');
// console.log(p)
// let h1 = document.createElement('h1');
// h1.textContent = 'I placed it before you!';
// p.before(h1);

// let insert = document.getElementById('insert');
// console.log(insert);
// let li = document.createElement('li');
// li.textContent = 'Products';
// insertAfter(li, insert.lastElementChild)

// Adjacent HTML method

// let list = document.getElementById('list');
// console.log(list)

// list.insertAdjacentHTML("beforebegin", '<h2>Web Technologies</h2>')
// list.insertAdjacentHTML("beforebegin", '<p>Lets learn in an group to overcome the matters</p>')
// list.insertAdjacentHTML('afterbegin', '<li>React</li>')
// list.insertAdjacentHTML('afterbegin', '<li>Vue</li>')
// list.insertAdjacentHTML('beforeend', '<li>Vue</li>')
// list.insertAdjacentHTML('afterend', '<h2>Thank you</h2>')

// let list = document.getElementById('list');
// let menu = list.cloneNode(true);
// menu.id = 'cloned';
// document.body.appendChild(menu);

// let att = document.getElementById('username');
// att.setAttribute('value', 'ami')

// for(let at of att.attributes){
//     console.log(`${at.name} = ${at.value}`);
// };

// let chkAccept = document.getElementById('chkAccept');
// console.log(chkAccept.checked)

console.dir(document.location.pathname);