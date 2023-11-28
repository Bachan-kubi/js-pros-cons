
console.log(window.location);
console.log(document.location);

// queryParams
let search= '?type=list&page=20';
let urlParams = new URLSearchParams('?type=list&page=20');
console.log(urlParams);
for(const key of urlParams.keys()){
    console.log(key);
};
for(const v of urlParams.values()){
    console.log(v);
};
for(const e of urlParams.entries()){
    console.table(e);
};

