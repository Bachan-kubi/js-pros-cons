// 01 
// const n = [10, 12, 15];
// // n = [25,  30, 50];
// n[1]= 100;
// console.log(n);
// 02

// const createPerson = (name, age, gender) => ({
     
//       name,
//       age,
//       gender  
//   });

//   console.log(createPerson("kubi", 10, "male"));

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
