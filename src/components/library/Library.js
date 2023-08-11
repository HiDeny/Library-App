import createForm from '../book/bookForm.js';
import BookCore from '../book/bookCore.js';
import createBookElement from '../book/bookElement.js';

import MemoryController from '../memory/localStorage.js';

const bodyDiv = document.querySelector('body');
const mainDiv = document.querySelector('#main');
const headerEle = document.querySelector('header');
const bookShelveDisplay = document.querySelector('.bookShelveDisplay');

function initBookShelve() {
  const shelveObj = MemoryController.downloadBookShelve();
  console.log(shelveObj);
  if (!shelveObj) return [];

  const bookShelve = [];

  const booksArrObj = Object.values(shelveObj);
  booksArrObj.forEach((book) => bookShelve.push(new BookCore(book)));

  return bookShelve;
}

// function removeForm() {
//   formOverlay.remove();
// }

function handleSubmit(event, handleFormReturn) {
  const data = new FormData(event.target);
  const bookData = Object.fromEntries(data.entries());
  const newBook = new BookCore(bookData);
  handleFormReturn(newBook);
}

// TODO Store Books
class Library {
  bookShelve = initBookShelve();

  handleFormReturn = (newBook) => {
    this.addBook(newBook);
  };

  // TODO Add Book function
  createBook = () => {
    const formBackground = document.createElement('div');
    formBackground.className = 'formOverlay'; // formBackground

    const form = createForm();
    formBackground.append(form);

    // Get data
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      handleSubmit(event, this.handleFormReturn);

      formBackground.remove();
    });

    return formBackground;
  };

  addBook = (book) => {
    this.bookShelve.push(book);

    const bookElement = createBookElement(book);
    // controlBookElement(bookElement);

    bookShelveDisplay.appendChild(bookElement);
    MemoryController.uploadBook(book);
    MemoryController.uploadBookShelve(this.bookShelve);
  };
}

// initial run
const activeLib = new Library();
// activeLib.displayBooks();

// Add book button
const addBookBtn = document.createElement('button');
addBookBtn.setAttribute('id', 'addBookBtn');
addBookBtn.addEventListener('click', () => {
  bodyDiv.appendChild(activeLib.addBookForm());
  document.getElementById('title').focus();
});
headerEle.appendChild(addBookBtn);

// activeLib.librarySetup();

// // TODO Display Books
// displayBooks = () => {
//   for (let book in this.myLibrary) {
//     let bookToAdd = this.createBookElement(this.myLibrary[book]);
//     bookShelve.appendChild(bookToAdd);
//   }
// };
