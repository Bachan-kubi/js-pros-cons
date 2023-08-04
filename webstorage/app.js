console.log(document.cookie);
document.cookie = 'village=nalchapra&state = netrakona&upazila=2420';

let link = 'https://jsonplaceholder.typicode.com/posts';

        function linkage(){
            fetch(link)
            .then(res => res.json())
            .then(data => displayData(data)); 
        };

        function displayData(data) {
            let displayElement = document.getElementById('display');

            let dataList = document.createElement('ul');

            data.forEach(post => {
                let listItem = document.createElement('li');
                listItem.textContent = `Post ${post.id}: ${post.title}`;
                dataList.appendChild(listItem);
            });

            displayElement.appendChild(dataList);        }

        // Attach the event listener after the DOM is loaded
        // document.addEventListener('DOMContentLoaded', function() {
        //     let display = document.getElementById('display');
        //     display.addEventListener('click', linkage);
        // });
        linkage();