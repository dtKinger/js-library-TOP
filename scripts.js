const books = document.querySelectorAll('.book');
const authors = document.querySelectorAll('.author');
const titles = document.querySelectorAll('.title');
let bookCount = document.querySelector('.book-count');


const myLibrary = [
  {title: 'The Hobbit', author: 'Tolkien'},
  {title: 'Lord of the Rings: Fellowship of the Ring', author: 'Tolkien'},
  {title: 'Lord of the Rings: Two Towers', author: 'Tolkien'},
  {title: 'Lord of the Rings: Return of the King', author: 'Tolkien'},
  {title: 'Harry Potter and the Philosopher\'s Stone', author: 'Rowling'},
  {title: 'Harry Potter and the Chamber of Secrets', author: 'Rowling'},
  {title: 'Harry Potter and the Prisoner of Azkaban', author: 'Rowling'},
  {title: 'Harry Potter and the Goblet of Fire', author: 'Rowling'},
  {title: 'Harry Potter and the Order of the Phoenix', author: 'Rowling'},
  {title: 'Harry Potter and the Half Blood Prince', author: 'Rowling'},
  {title: 'Harry Potter and the Deathly Hallows', author: 'Rowling'},
  {title: 'All the Light We Cannot See', author: 'Doerr'},
];

let cloneLibrary = function cloneLibrary (){
  return libClone = [...myLibrary];
};

// Sort copy of Library array by Author last name;

function sortLibrary () {
  cloneLibrary();
  libClone.sort(function(a, b) {
    var textA = a.author.toUpperCase();
    var textB = b.author.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

coverColors = ["rgb(200, 0, 0)", "rgb(0, 200, 0)", "rgb(0, 0, 200)", "rgb(156, 100, 0)", "rgb(150, 150, 0)", "rgb(0, 150, 150)"];

// Populate bookshelf
/// Included in the populateBookCase function
let setCoverColor = function setCoverColors(){
    books.forEach((book) => {
    let coverChoice = coverColors[Math.floor((Math.random()*5))];
    book.style.backgroundColor = coverChoice;
  })
}

let populateBookCase = function populate (author, title) {
  sortLibrary(); // Clone myLibrary and sort/ manipulate it.
  for (let i = 0; i < libClone.length; i += 1){
    authors[i].textContent = libClone[i].author;
    titles[i].textContent = libClone[i].title;
    books[i].setAttribute('data-id', i);
  };
  setCoverColor();
  // Update Book Count
  bookCount.textContent = libClone.length;
  refreshDeleteBtns();
};
populateBookCase();

// Add new book objects
// Create a data-id="array.index"
/// Constructor
function Book() {
  this.title = title;
  this.author = author;
}

// Delete ("Take / check out") a book
function refreshDeleteBtns(){
  let takeBookBtns = document.querySelectorAll('.btn-delete');
  takeBookBtns.forEach(function (book) {
    book.addEventListener('click', function (e) {
      // Delete book from array
      let dataId = (e.target.parentElement.parentElement.parentElement).getAttribute('data-id');
      libClone.splice(dataId, 1);
      // Delete HTML element of the book
      (e.target.parentElement.parentElement.parentElement).remove();
    });
  });
}

function addToLibrary(){

};




