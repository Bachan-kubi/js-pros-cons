//ECMAScript 5 class
// var Human = function Human(name) {
//   this.name = name;
// };
// Human.prototype.sayGoodNight = function () {
//   return "Say Goodnight " + this.name;
// };
// var george = new Human("Gracie");
// console.log(george.sayGoodNight());

// function Human(name, address){
//   this.name = name;
//   this.address = address;
// }
// let Boby = new Human('Boby', 'dhaka');

// Human.prototype.getHi = function(){
//   return 'Say Hi! ' + this.name +'.';
// }
// console.log(Boby.getHi())




//ECMAScript 6 class
// class Greeting {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     return "Hellooo " + this.name;
//   }
// }
// var yakko = new Greeting("Nurse!");
// console.log(yakko.sayHello());

// class Human{
//   constructor(name, address){
//     this.name = name;
//     this.address = address
//   }
//   sayHi(){
//     return 'hellow ' + this.name + ', ' + this.address;
//   }
// }

// let Bachan = new Human('obi', 'birisiri');
// let rubi = new Human('ubi', 'isiri');
// console.log(rubi.sayHi());

// class Human {
//   constructor(name, address){
//     this.name = name;
//     this.address = address;
//   }

//   sayHi(){
//     return 'Hello ' + this.name + ', ' + this.address;
//   }
// }

// let Bachan = new Human('obi', 'birisiri');
// let rubi = new Human('ubi', 'Uraisiri');

// // Get the output div from the DOM
// const outputDiv = document.getElementById('output');

// // Create a new paragraph element to hold the result
// const resultParagraph = document.createElement('h2');

// // Set the text content of the paragraph to the result of the sayHi method
// resultParagraph.innerHTML += Bachan.sayHi();
// resultParagraph.innerHTML += rubi.sayHi();

// // Append the paragraph to the output div
// outputDiv.appendChild(resultParagraph);


// class Book {
//   constructor(title, author, ISBN) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//   }

//   displayInfo() {
//     return `Book Name: ${this.title} by ${this.author}, (ISBN: ${this.ISBN})`;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//   }

//   listBooks() {
//     for (const book of this.books) {
//       console.log(book.displayInfo());
//     }
//   }
// }
// const myLibrary = new Library();

// function addBook() {
//   const title = prompt("Enter the book's title:");
//   const author = prompt("Enter the author's name:");
//   const ISBN = prompt("Enter the ISBN:");

//   const newBook = new Book(title, author, ISBN);
//   myLibrary.addBook(newBook);
// }

// function listBooks() {
//   myLibrary.listBooks();
// }
