const bookShelfDisplay = document.querySelector('.bookShelfDisplay');

// TODO Display Books
export default class ScreenController {
  static displayForm(form) {
    document.body.appendChild(form);
    document.getElementById('titleForm').focus();
  }

  static displayBookCard(bookCard) {
    bookShelfDisplay.appendChild(bookCard);
  }
}
