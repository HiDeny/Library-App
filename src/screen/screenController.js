const bookShelfDisplay = document.querySelector('.bookShelfDisplay');

// TODO Display Books
export default class ScreenController {
  static displayForm(form) {
    bookShelfDisplay.append(form);
    document.getElementById('titleForm').focus();
  }

  static displayBookCard(bookCard) {
    bookShelfDisplay.appendChild(bookCard);
  }
}
