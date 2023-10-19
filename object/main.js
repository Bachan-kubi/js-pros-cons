let planOne = {
  name: "Basic",
  price: 4,
  space: 100,
  transger: 1000,
  pages: 10,
  discountMonths: [6, 7],

//   object method using this -1

  calcAnnual: function (percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (planOne.discountMonths[i] === thisMo) {
        bestPrice = this.price * percentIfDisc;
        console.log(bestPrice)
        break;
      }
    }
    return bestPrice * 12;
  }
}


// object method without this as vanilla javascirpt
// calcAnnual: function(percentIfDisc) {
//       var bestPrice = planOne.price;
//       var currDate = new Date();
//       var thisMo = currDate.getMonth();
//       for (var i = 0; i < planOne.discountMonths.length; i++) {
//         if (planOne.discountMonths[i] === thisMo) {
//           bestPrice = planOne.price * percentIfDisc;
//           console.log(bestPrice)
//           break;
//         }
//       }
//       return bestPrice * 12;
//     }
// };



// function calcAnnual(percentIfDisc) {
//   var bestPrice = planOne.price;
//   var currDate = new Date();
//   var thisMo = currDate.getMonth();
//   for (var i = 0; i < planOne.discountMonths.length; i++) {
//     if (planOne.discountMonths[i] === thisMo) {
//       bestPrice = planOne.price * percentIfDisc;
//       console.log(bestPrice)
//       break;
//     }
//   }
//   return bestPrice * 12;
// }
// var annualPrice = calcAnnual(.8);
console.log(planOne.calcAnnual(.8));

// constructor

const s = [10, 15, 10];
s=[20, 8, 9]
console.log(s);

