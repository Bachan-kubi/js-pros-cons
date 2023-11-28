// const p01 = document.getElementById("para-01");
// console.log(p01.firstChild.nodeName);
// console.log(p01.nextSibling);
// for(let node of document.body.childNodes){
//     console.log(node);
// }

// for(let nodes of document.body.children){
//     console.log(nodes[0]);
// }

// let n = document.body.children;
// console.log(n[0]);
// console.log(document.body.firstElementChild);
// // access ul
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[5]);
// // console.log(document.body.children[1].children[1]);
// console.log(document.body.children[1].children[1]);

let table = document.body.firstElementChild;
console.dir(table);
// console.dir(table.rows);
for(let i=0;i<table.rows.length;i++){
    let row = table.rows[i];
    console.log(row);
    row.cells[i].style.background= 'red';
}

function totalSums(...param){
    let total=0;
    param.forEach(perEleme=>{
        total += perEleme;
    });
    return total;
}
console.log(totalSums(2, 5));


