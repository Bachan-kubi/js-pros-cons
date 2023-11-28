// const request = new XMLHttpRequest();
// console.log(request);
// request.open('GET', 'URL', true);
// request.send();

// request.onreadystatechange= function ajaxHandler(){
//     console.log(request)
// }

const loadPosts = document.getElementById("btn");
const showPosts = document.getElementById("showPosts");
const ul = document.createElement("ul");

loadPosts.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  request.send();

  request.onreadystatechange = function ajaxHandler() {
    // console.log(request.responseText);
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      data.forEach(post=>{
        console.log(post)
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>${post.title}</h2>
        <h3>${post.body}</h3>
        <h3>${post.userId}</h3>
        `
        ul.appendChild(li);
      });
      showPosts.insertAdjacentElement("beforeend", ul);
    //   showPosts.appendChild(ul);
    }
  };
});
