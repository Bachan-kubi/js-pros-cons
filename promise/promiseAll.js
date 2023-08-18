// Promise.all([
//     new Promise(resolve=>setTimeout(()=>resolve(1), 3000)),
//     new Promise(resolve=>setTimeout(()=>resolve(2), 2000)),
//     new Promise(resolve=>setTimeout(()=>resolve(3), 1000))
// ])
// .then(res=>console.log(res));


//   let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
// //   // map every url to the promise of the fetch
// //   let requests = urls.map(url => fetch(url));
  
// //   // Promise.all waits until all jobs are resolved
// //   Promise.all(requests)
// //     .then(responses => responses.forEach(
// //       response => alert(`${response.url}: ${response.status}`)
// //     ));

// let req = urls.map(url=>fetch(url));

// Promise.all(req)
// .then(res=>res.forEach(r=>console.log(`${r.url}:${r.status}`)));

let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name=>fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
.then(res=>{
  for(let r of res){
    console.log(`${r.url}: ${r.status}`)
  }
  return res;
})
.then(results=>Promise.all(results.map(re=>re.json())))
.then(users=>users.forEach(user=>console.log(user.name)))
