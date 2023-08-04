console.dir(document);
console.log(document.location);

let good = {
    name: 'kubi'
}
console.log(good['name'])


let employee = {
    name: "Ronnell Jones",
    lastName: 'Kubi',
    position: "manager",
    bio: function(){
        return (`${this.name} ${this.lastName} ${this.position}`)
    }
    };

    console.log(employee.bio());
