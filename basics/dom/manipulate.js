// const main = document.getElementById('main');
// let div = document.createElement('div');
// div.id = 'content'
// div.className = 'names'
// div.innerHTML = `<h1>New div</h1>`;
// main.appendChild(div);

// let h2 = document.createElement('h2');
// h2.textContent = 'ami ki r pari ko';
// main.append(h2);

// let firstList = document.getElementById('first-list');
// let everest = firstList.firstElementChild;
// console.log(everest);
// let lastList = document.getElementById('second-list');
// lastList.appendChild(everest)

function createMenuItems(items){
    let li = document.createElement('li');
    li.textContent = items;
    return li;
};

let menu = document.getElementById('menu');
menu.appendChild(createMenuItems('Home'))
menu.appendChild(createMenuItems('Services'))
menu.appendChild(createMenuItems('About us'))
menu.style.background = 'red'
menu.style.color = 'white'
menu.style.padding = '25px'
