// crate book class
class Books{
    constructor(title, author, isbn, year){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year = year;
    }
    displayBooks(){
        return `Title: ${this.title} by ${this.author} (ISBN: ${this.isbn}) and published year- ${this.year}`;
    }
}

//create library to store books
class Library{
    constructor(){
        this.books = [];
    }
    addBooks(book){
        this.books.push(book);
    }
    listBooks(){
        let bookList = '';
        for(let book of this.books){
            bookList += book.displayBooks() + `<br>`;
        }
        return bookList;
    }
}

const myLibrary = new Library();

// form submission 
const formBook = document.getElementById('form-book');
const showBooks = document.getElementById('showBooks');

formBook.addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const year = document.getElementById('year').value;
    console.log(title, author, isbn, year);
    myLibrary.addBooks(new Books(title, author, isbn, year));

    updateBooklist();
    formBook.reset();
});

function updateBooklist(){
    showBooks.innerHTML = myLibrary.listBooks();
}
