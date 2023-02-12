// Bug. Need to not rely on the 15 div's to hold books
// Instead, need to use append to add and JS to remove

let authors = document.querySelectorAll('.author');
let titles = document.querySelectorAll('.title');
let bookCount = document.querySelector('.book-count');
const addBookBtn = document.querySelector('.add-book');
const addBookMbBtn = document.querySelector('.add-book-mb');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
const newTitleMb = document.getElementById('new-title-mb');
const newAuthorMb = document.getElementById('new-author-mb');
const bookCase = document.getElementById('case');

// const users = [
//   { firstName: "Daniel", lastName: "King", age: 34 },
//   { firstName: "Donald", lastName: "Trump", age: 75 },
//   { firstName: "Lucie", lastName: "Ho", age: 27 },
// ];

// const output = users.filter(x => x.age < 40).map(y => y.firstName );
// console.log(output);

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

  // Delete existing Library so it can be refreshed.
  dumpHtml();
  sortLibrary();

  for (let i = 0; i < libClone.length; i += 1) {
    
    let divBook = document.createElement('div');
    divBook.classList.add('book');
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
  // Add a function for read status
}

function BookMb(title, author) {
  this.title = newTitleMb.value;
  this.author = newAuthorMb.value;
  // Add a function for read status
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
  if (newTitle.value != '' && newAuthor.value != ''){
    if (bookCount.textContent < 15){
        libClone.push(new BookMb);
        newTitleMb.value = '';
        newAuthorMb.value = '';
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


