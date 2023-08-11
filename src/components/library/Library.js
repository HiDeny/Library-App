import createForm from '../book/bookForm.js';
import Book from '../book/Book.js';

import MemoryController from '../../memory/localStorage.js';
import ScreenController from '../../screen/screenController.js';

function initBookShelve() {
  const shelveObj = MemoryController.downloadBookShelve();
  const shelveObjValues = Object.values(shelveObj);

  return shelveObjValues.map((book) => new Book(book));
}

// TODO Store Books
class Library {
  bookShelve = initBookShelve();

  displayBooks = (() =>
    this.bookShelve.forEach((book) => ScreenController.displayBook(book)))();

  // TODO Add Book function
  createBook = () => {
    const returnData = (bookData) => this.addBook(new Book(bookData));
    const bookForm = createForm(returnData);

    ScreenController.displayForm(bookForm);
  };

  addBook = (book) => {
    this.bookShelve.push(book);
    ScreenController.displayBook(book);

    MemoryController.uploadBook(book);
    MemoryController.uploadBookShelve(this.bookShelve);
  };

  removeBook = (bookToRemove) => {
    //! Test
    // filter book in in bookshelve
    const findBook = this.bookShelve.filter(
      (book) => book.id === bookToRemove.id
    );
    const bookIndex = this.bookShelve.indexOf(findBook);
    // splice book
    this.bookShelve.splice(bookIndex, 1);
    console.log(findBook);
    console.log(this.bookShelve);
    // remove book
    MemoryController.deleteBook(bookToRemove);
    MemoryController.uploadBookShelve(this.bookShelve);
  };
}

// initial run
const activeLib = new Library();
console.log(activeLib.bookShelve);

addBookBtn.addEventListener('click', () => {
  activeLib.createBook();
});
