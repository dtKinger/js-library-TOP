// Bug. Need to not rely on the 15 div's to hold books
// Instead, need to use append to add and JS to remove

const authors = document.querySelectorAll('.author');
const titles = document.querySelectorAll('.title');
let bookCount = document.querySelector('.book-count');
const addBookBtn = document.querySelector('.add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const bookCase = document.getElementById('case');


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
function setCoverColors(){
  const books = document.querySelectorAll('.book');
    books.forEach((book) => {
    let coverChoice = coverColors[Math.floor((Math.random()*5))];
    book.style.backgroundColor = coverChoice;
  })
}




function generateLibHtml () {

  cloneLibrary();

  for (let i = 0; i < libClone.length; i += 1) {
    
    let div = document.createElement('div');
    div.classList.add('book');
      let span = document.createElement('span');
      span.classList.add('author');
      let p = document.createElement('p');
      p.classList.add('title');
      p.textContent = libClone[i].title;
      span.textContent = libClone[i].author;
      div.appendChild(span);
      div.appendChild(p);
    bookCase.appendChild(div);
  }

};

function updateBookCount(){
  bookCount.textContent = libClone.length;
};

function populateBookCase () {
  sortLibrary(); // Clone myLibrary and sort/ manipulate it.
  updateBookCount();
  generateLibHtml();
  setCoverColors();
  refreshDeleteBtns();
};
populateBookCase();

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
      updateBookCount();
    });
  });
}


// Add new book objects

/// Constructor
function Book(title, author) {
  this.title = newTitle.value;
  this.author = newAuthor.value;
  // Add a function for read status
}

// Create new Book and add it to library.
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (newTitle.value != '' && newAuthor.value != ''){
    if (bookCount.textContent < 15){
        myLibrary.push(new Book);
        newTitle.value = '';
        newAuthor.value = '';
        newTitle.focus();
        populateBookCase();
      } else {
    alert('The shelf is full!');
    return; // exit
    }
  }
});


