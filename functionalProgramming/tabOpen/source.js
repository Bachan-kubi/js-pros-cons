// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//   let collectionMatches = [];
//   for (let i = 0; i <collection.length; i++) {
//     let foundMismatched = false;
//     for (let sourceProps in source) {
//       if (collection[i][sourceProps] !== source[sourceProps]) {
//         foundMismatched = true;
//       }
//     }
//     if (!foundMismatched) {
//       collectionMatches.push(collection[i]);
//     }
//   }
//   console.log(collectionMatches);
//   return collectionMatches;
// }

// whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" },
//   ],
//   { last: "Capulet" }
// );

// function convertHTML(str) {
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };

//   return str.split("").map(entity=>htmlEntities[entity]|| entity).join("");
// }

// convertHTML("Dolce & Gabbana");

// function sumFibs(num) {
//   let prev = 0;
//   let current = 1;
//   let result = 0;
//   while (current <= num) {
//     if (current % 2 !== 0) {
//       result += current;
//     }
//     current+=prev;
//     prev = current-prev;
//   }
//   console.log(result);
//   return result;
// }

// sumFibs(4);

function sumPrimes(num) {
  let isPrime = [];
  for (let i = 2; i <= num; i++) {
    if (isPrime.every((prime) => i % prime !== 0)) isPrime.push(i);
  }
  let p = isPrime.reduce((sum, prime) => sum + prime, 0);
  console.log(p);
  return isPrime;
}

sumPrimes(5);
