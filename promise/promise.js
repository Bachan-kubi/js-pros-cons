// const promise = new Promise(function(resolve, reject){
//   // let p = setTimeout(()=>resolve('doen'), 2000);
//   let r = setTimeout(()=>reject('undone!'), 2000);
// });
// promise.then(
//   result=>console.log(result),
//   reject=>console.log(reject)
// )
// .catch(e=>{
//   console.log(e.message)
// })
// .finally(()=>{
//   console.log('Finally Arrived!');
// })

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(
  result=>console.log(result)
);

//
function go() {
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });
}

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    }, 0);
  })
}

let data = fetch('https://jsonplaceholder.typicode.com/posts');
  data
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(e=>console.log(e.message))
