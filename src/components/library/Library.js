import createForm from '../book/bookForm.js';
import Book from '../book/Book.js';

import MemoryController from '../../memory/localStorage.js';
import ScreenController from '../../screen/screenController.js';

function initBookShelf() {
  const getBooks = MemoryController.downloadStoredBooks();
  return getBooks.map((book) => new Book(book));
}

// TODO Store Books
class Library {
  bookShelf = initBookShelf();

  displayBooks = (() =>
    this.bookShelf.forEach((book) => ScreenController.displayBook(book)))();

  // TODO Add Book function
  createBook = () => {
    const useData = (bookData) => this.addBook(new Book(bookData));
    ScreenController.displayForm(createForm(useData));
  };

  addBook = (book) => {
    this.bookShelf.push(book);
    ScreenController.displayBook(book);
    MemoryController.uploadBook(book);
  };

  // findBook = (bookToFind) => {
  //   const foundBook = this.bookShelf.filter(
  //     (book) => book.id === bookToFind.id
  //   );

  //   return foundBook;
  // };

  removeBook = (bookToRemove) => {
    //! Test
    // const getBook = this.findBook(bookToRemove);
    const findCondition = (book) => book.id === bookToRemove.id;
    const bookIndex = this.bookShelf.findIndex(findCondition);

    this.bookShelf.splice(bookIndex, 1);
    console.log(this.bookShelf);
    // remove book
    MemoryController.uploadBookShelf(this.bookShelf);
  };
}

// initial run
const activeLib = new Library();
console.log(activeLib.bookShelf);

addBookBtn.addEventListener('click', () => {
  activeLib.createBook();
});
