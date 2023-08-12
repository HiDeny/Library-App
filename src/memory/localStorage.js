export default class MemoryController {
  static uploadBook = (book) => {
    localStorage.setItem(book.id, JSON.stringify(book));
  };

  static downloadBook(book) {
    const JSONBook = localStorage.getItem(book.id);
    return JSON.parse(JSONBook);
  }

  static deleteBook(book) {
    localStorage.removeItem(book.id);
  }

  static downloadStoredBooks() {
    const storedBooksLocal = Object.values(localStorage)
      .sort()
      .map((value) => JSON.parse(value))
      .filter((value) => typeof value === 'object')
      .filter((value) => !(value instanceof Array));

    return storedBooksLocal;
  }
}
