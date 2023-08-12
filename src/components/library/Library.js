import createForm from '../../form/bookForm.js';

import BookShelf from '../bookShelf/bookShelf.js';

import Book from '../book/Book.js';
import createBookElement from '../book/bookElement.js';
import controlBookElement from '../book/controlBookElement.js';

import MemoryController from '../../memory/localStorage.js';
import ScreenController from '../../screen/screenController.js';

const displayBook = (book) => {
  const bookElement = createBookElement(book);
  controlBookElement(book, bookElement);
  ScreenController.displayBookCard(bookElement.card);
};

const createBook = () => {
  const useData = (bookData) => {
    const newBook = new Book(bookData);

    BookShelf.addBook(newBook);
    MemoryController.uploadBook(newBook);
    displayBook(newBook);
  };
  ScreenController.displayForm(createForm(useData));
};

const addBookBtn = document.getElementById('addBookBtn');
addBookBtn.onclick = createBook;

// Populate bookshelf from localMemory and display them
(() => {
  const getBooks = MemoryController.downloadStoredBooks();
  getBooks.forEach((book) => BookShelf.addBook(new Book(book)));
  BookShelf.books.forEach((book) => displayBook(book));
})();
