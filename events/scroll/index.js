let btn = document.querySelector('.btn');
let el = document.querySelector('.special');

// btn.addEventListener('click', function () {
//     el.scrollIntoView(true);
// });

const pwd = document.querySelector('input[type="password"]');

        pwd.addEventListener('focus', (e) => {
            e.target.style.backgroundColor = 'yellow';
        });

        pwd.addEventListener('blur', (e) => {
            e.target.style.backgroundColor = '';
        });

        let menu = document.querySelector('#menu');

        menu.addEventListener('click', (event) => {
            let target = event.target;
            switch(target.id){
                case 'home':
                    console.log('Home menu item was clicked');
                    break;
                case 'dashboard':
                    console.log('Dashboard clicked');
                    break
                case 'report':
                    console.log('Report is clicked!');
                    break;
            }
        });