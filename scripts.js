const books = document.querySelectorAll('.book');
const authors = document.querySelectorAll('.author');
const titles = document.querySelectorAll('.title');
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

let cloneLibrary = [...myLibrary];

// Sort copy of Library array by Author last name;

function sortLibrary () {
  cloneLibrary.sort(function(a, b) {
    var textA = a.author.toUpperCase();
    var textB = b.author.toUpperCase();
    return (textA < textB) ? -1 : 1;
  });
}
sortLibrary();

console.log(cloneLibrary);

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
  for (let i = 0; i < cloneLibrary.length; i += 1){
    authors[i].textContent = cloneLibrary[i].author;
    titles[i].textContent = cloneLibrary[i].title;
  };
  setCoverColor();
};
populateBookCase();






