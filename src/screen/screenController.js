import createBookElement from '../components/book/bookElement.js';
import controlBookElement from '../components/book/controlBookElement.js';

const bodyDiv = document.querySelector('body');
const mainDiv = document.querySelector('#main');
const headerEle = document.querySelector('header');
const bookShelveDisplay = document.querySelector('.bookShelveDisplay');

// TODO Display Books
export default class ScreenController {
  static displayForm(form) {
    bookShelveDisplay.append(form);
    // document.getElementById('title').focus();
  }

  static displayBook(book) {
    const bookElement = createBookElement(book);
    console.log(bookElement);
    bookShelveDisplay.appendChild(bookElement);
  }

  static deleteBook(book) {}
}
