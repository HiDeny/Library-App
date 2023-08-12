export default class MemoryController {
  static uploadBook = (book) => {
    const bookToJSON = JSON.stringify(book);
    localStorage.setItem(book.id, bookToJSON);
  };

  static downloadBook(book) {
    const JSONBook = localStorage.getItem(book.id);
    return JSON.parse(JSONBook);
  }

  static deleteBook(book) {
    localStorage.removeItem(book.id);
  }

  static uploadBookShelf(bookShelf) {
    if (!bookShelf) throw new Error('Missing bookshelf');
    bookShelf.forEach((book) => this.uploadBook(book));
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
