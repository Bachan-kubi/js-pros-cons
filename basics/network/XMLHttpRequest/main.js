// let xhr = new XMLHttpRequest();
// console.log(xhr);


// /*
// Initiate network connection wiht Open method
// 1. method-usually Get/Post
// 2. URL-URL to request a string / URL Object
// 3. async -by default false
// 4. user/password - basic http auth if requier
// represents the state of the request. It ranges from 0 to 4.
// 0 UNOPENED open() is not called.

// 1 OPENED open is called but send() is not called.

// 2 HEADERS_RECEIVED send() is called, and headers and status are available.

// 3 LOADING Downloading data; responseText holds the data.

// 4 DONE The operation is completed fully.
// */


// xhr.open(method, URL, [async, user, password]);
// xhr.send([body]);
// xhr.onload=function(){
//     alert(`loaded: ${xhr.status} ${xhr.response}`)
// }
// xhr.onerror = function() { // only triggers if the request couldn't be made at all
//     alert(`Network Error`);
//   };
  
//   xhr.onprogress = function(event) { // triggers periodically
//     // event.loaded - how many bytes downloaded
//     // event.lengthComputable = true if the server sent Content-Length header
//     // event.total - total number of bytes (if lengthComputable)
//     alert(`Received ${event.loaded} of ${event.total}`);
//   };

// // 1. Create a new XMLHttpRequest object
// let xhr = new XMLHttpRequest();
// console.log(xhr)
// // 2. Configure it: GET-request for the URL /article/.../load
// xhr.open('GET', '/article/xmlhttprequest/example/load');

// // 3. Send the request over the network
// xhr.send();

// // 4. This will be called after the response is received
// xhr.onload = function() {
//   if (xhr.status != 200) { // analyze HTTP status of the response
//     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//   } else { // show the result
//     alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
//   }
// };

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//     alert(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//     alert(`Received ${event.loaded} bytes`); // no Content-Length
//   }

// };

// xhr.onerror = function() {
//   alert("Request failed");
// };
// method 1
const calculation = (x) => {
  let sumOfSquares = 0;

  for (let i = 0; i < x.length; i++) {
    x[i] *= x[i];
    sumOfSquares += x[i];
  }

  return sumOfSquares;
}

const array = [2, 4];
const sum = calculation(array);
const average = sum / array.length;

console.log(array, sum, average); 

// method-2
const calculateAverageOfSumOfSquares = (array) => {
  const squaredArray = array.map((element) => element * element); 
  
  const sumOfSquares = squaredArray.reduce((sum, element) => sum + element, 0); 
  const average = sumOfSquares / array.length; 
  
  return average;
};

const inputArray = [2, 4];
const result = calculateAverageOfSumOfSquares(inputArray);

console.log("Average of sum of squared elements:", result);  // Output: Average of sum of squared elements: 10

