// let promise = Promise.resolve();
// promise
// .then(()=>console.log(`first`));

// console.log('second')

Promise.resolve()
.then(()=>console.log('done'))
.then(()=>console.log('ok'))
console.log('why');