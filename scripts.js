// Bug. Need to not rely on the 15 div's to hold books
// Instead, need to use append to add and JS to remove

let authors = document.querySelectorAll('.author');
let titles = document.querySelectorAll('.title');
let bookCount = document.querySelector('.book-count');
const addBookBtn = document.querySelector('.add-book');
const addBookMbBtn = document.querySelector('.add-book-mb');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const newRecommended = document.getElementById('recommended')
const newRecommendedMb = document.getElementById('recommended-mb')
const newTitleMb = document.getElementById('new-title-mb');
const newAuthorMb = document.getElementById('new-author-mb');
const bookCase = document.getElementById('case');

const myLibrary = [
  {title: 'The Hobbit', author: 'Tolkien', recommended: false},
  {title: 'Lord of the Rings: Fellowship of the Ring', author: 'Tolkien', recommended: true},
  {title: 'Lord of the Rings: Two Towers', author: 'Tolkien', recommended: false},
  {title: 'Lord of the Rings: Return of the King', author: 'Tolkien', recommended: false},
  {title: 'Harry Potter and the Philosopher\'s Stone', author: 'Rowling', recommended: false},
  {title: 'Harry Potter and the Chamber of Secrets', author: 'Rowling', recommended: true},
  {title: 'Harry Potter and the Prisoner of Azkaban', author: 'Rowling', recommended: false},
  {title: 'Harry Potter and the Goblet of Fire', author: 'Rowling', recommended: false},
  {title: 'Harry Potter and the Order of the Phoenix', author: 'Rowling', recommended: true},
  {title: 'Harry Potter and the Half Blood Prince', author: 'Rowling', recommended: false},
  {title: 'Harry Potter and the Deathly Hallows', author: 'Rowling', recommended: false},
  {title: 'All the Light We Cannot See', author: 'Doerr', recommended: false},
];

function cloneLibrary (){
  return libClone = [...myLibrary];
};
cloneLibrary();

// Sort copy of Library array by Author last name;

function sortLibrary () {
  libClone.sort(function(a, b) {
    var textA = a.author.toUpperCase();
    var textB = b.author.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}

//
function dumpHtml () {
  bookCase.innerHTML = '';
};

coverColors = ["rgb(100, 40, 30)", "rgb(40, 65, 20)", "rgb(20, 40, 65)", "rgb(156, 100, 0)", "rgb(150, 150, 0)", "rgb(0, 150, 150)"];

// Populate bookshelf
/// Included in the populateBookCase function
function setCoverColors(){
  const books = document.querySelectorAll('.book');
    books.forEach((book) => {
    book.addEventListener('ontouchstart', function(){});
    let coverChoice = coverColors[Math.floor((Math.random()*5))];
    book.style.backgroundColor = coverChoice;
  })
}

function generateLibHtml () {

  // Delete existing Library so it can be refreshed.
  dumpHtml();
  sortLibrary();

  // Rebuild the library
  for (let i = 0; i < libClone.length; i += 1) {
    
    let divBook = document.createElement('div');
    divBook.classList.add('book');
    if (libClone[i].recommended === true) {
      divBook.classList.add('recommended');
    };
      let spanAuthor = document.createElement('span');
      spanAuthor.classList.add('author');
      spanAuthor.textContent = libClone[i].author;

      let paraTitle = document.createElement('p');
      paraTitle.classList.add('title');
      paraTitle.textContent = libClone[i].title;
      
      let divBtnDelete = document.createElement('div');
      divBtnDelete.classList.add('btn-delete');
      let btnDelete = document.createElement('button');
      btnDelete.textContent = 'Take Book';
      divBtnDelete.appendChild(btnDelete);

      divBook.appendChild(spanAuthor);
      divBook.appendChild(paraTitle);
      divBook.appendChild(divBtnDelete);
    bookCase.appendChild(divBook);
  }
  refreshDeleteBtns();
};


function updateBookCount(){
  bookCount.textContent = libClone.length;
};

function populateBookCase () {
  generateLibHtml();
  updateBookCount();
  setCoverColors();
};
populateBookCase();

// Delete ("Take / check out") a book
function refreshDeleteBtns(){
  let takeBookBtns = document.querySelectorAll('.btn-delete');
  takeBookBtns.forEach(function (book) {

    book.addEventListener('click', function (e) {
      // Delete book from array
      let dataId = (e.target.parentElement.parentElement).getAttribute('data-id');
      libClone.splice(dataId, 1);
      // Delete HTML element of the book
      (e.target.parentElement.parentElement).remove();
      updateBookCount();
    });
  });
}


// Add new book objects

/// Constructor
function Book(title, author) {
  this.title = newTitle.value;
  this.author = newAuthor.value;
  this.recommended = newRecommended.checked;
}

function BookMb(title, author) {
  this.title = newTitleMb.value;
  this.author = newAuthorMb.value;
  this.recommended = newRecommendedMb.checked;
}

// Create new Book and add it to library.
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (newTitle.value != '' && newAuthor.value != ''){
    if (bookCount.textContent < 15){
        libClone.push(new Book);
        newTitle.value = '';
        newAuthor.value = '';
        newTitle.focus();
        populateBookCase();
      } else {
    alert('The shelf is full!');
    return; // exit
    }
  } else {
    alert('Title and Author are required.');
    newTitle.focus();
  }
});

// Duplicate for Mobile - so the inputs fields
// can be verified independently
addBookMbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (newTitleMb.value != '' && newAuthorMb.value != ''){
    if (bookCount.textContent < 15){
        libClone.push(new BookMb);
        newTitleMb.value = '';
        newAuthorMb.value = '';
        newTitleMb.focus();
        populateBookCase();
      } else {
    alert('The shelf is full!');
    return; // exit
    }
  } else {
    alert('Title and Author are required.');
    newTitleMb.focus();
  }
});


