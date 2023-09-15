// call method
const thisObj = {
    name: "Bachan Kubi",
    age: 25,
    job: "Web Developer",
    intro: {
        name: "Kubi",
        age: 40,
        value: function(){
            console.log(`my name is ${this.name} and age is ${this.age}`);
        }
    }
}
// here we use this to set values of intro sub objects 
// thisObj.intro.value();
// if we want to set main object in sub object, we have to use call method to set values 
// thisObj.intro.value.call(thisObj);
// thisObj.intro.value.apply(thisObj);
// let bindMe = thisObj.intro.value.bind(thisObj);
// bindMe();

const karim = {
    name: "karim Rahman",
    dob: 1984,
    ageCalculation: function(currentYear){
        console.log(`I am ${this.name} and my age is ${currentYear-this.dob}`);
    }
}
// karim.ageCalculation(2023);

const tim = {
    name: "Timtim",
    dob: 1988
}
const smrity = {
    name: "Smrity Chambugong",
    dob: 1990
}
karim.ageCalculation.call(tim, 2023);
karim.ageCalculation.call(smrity, 2023);

const hiya = {
    name: "Hiya Mree",
    dob: 1980,
    getAge: function(year, msg){
        console.log(`${msg}! my name is ${this.name} and my age is ${year-this.dob}`)
    }
}

let doly = {
    name: "Doly Ashakra",
    dob: 1985
}

// hiya.getAge.apply(doly, [2023, "hi"])
let newHiya = hiya.getAge.bind(doly);
newHiya(2023, "hi");
newHiya(2023, "HI Kubi");
newHiya(2023, "Hi Khanki");