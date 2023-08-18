// async function run(){
//     return(
//         'learning js asysnc'
//     )
// }
// run().then(alert);
async function fun(){
    let promise = new Promise((res, rej)=>{
        setTimeout(()=>res('done!'), 1000)
    });
    let result = await promise;
    console.log(result);
}
fun();

// let data = 'https://jsonplaceholder.typicode.com/posts';
// async function dataStore(){
//     let resposne = await fetch(data);
//     let result = await resposne.json();
//     console.log(result)

// };

// dataStore();

//
(async () => {
    const data = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(data);
        const result = await response.json();
        console.log(result);
        result.forEach(r=>console.log(r.body))
        //-2 result.map(r=>console.log(r))
        //-3 for(let r of result){
        //     console.log(r)
        // }
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
