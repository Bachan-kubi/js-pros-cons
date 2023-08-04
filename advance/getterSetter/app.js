let person = {
    name: 'kubi',
    age: 30,
    email: 'kubi@gmail.com',
    language: 'en',
    get lang(){
        return this.language.toUpperCase();
    }
};

console.log(person.language);

let brand = {
    name: 'nokia',
    country: 'finland',
    made: '',
    set madeOf(c){
        return this.made = c;
    }
};
brand.madeOf = 'japan';
console.log(brand.made);

let gf = {
    name: 'smrity',
    lastName: 'chambugong',
    village: 'Chengni',
    get villa(){
        return this.village.toUpperCase();
    }
};
console.log(gf.village);

let myX = {
    name: 'rimi',
    addres: 'Chitagong',
    education: '',
    set edu(e){
        return this.education = e;
    }
};

myX.education = 'love';
console.log(myX.education);

