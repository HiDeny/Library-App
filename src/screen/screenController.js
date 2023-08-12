import createBookElement from '../components/book/bookElement.js';

// const bodyDiv = document.querySelector('body');
// const mainDiv = document.querySelector('#main');
// const headerEle = document.querySelector('header');
const bookShelfDisplay = document.querySelector('.bookShelfDisplay');

// TODO Display Books
export default class ScreenController {
  static displayForm(form) {
    bookShelfDisplay.append(form);
    // document.getElementById('title').focus();
  }

  static displayBook(book) {
    const bookElement = createBookElement(book);

    bookShelfDisplay.appendChild(bookElement);
  }
}
