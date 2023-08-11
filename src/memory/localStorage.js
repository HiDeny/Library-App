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

  static uploadBookShelve(library) {
    const shelveToJSON = JSON.stringify(library);
    localStorage.setItem('bookShelve', shelveToJSON);
  }

  static downloadBookShelve() {
    const JSONShelve = localStorage.getItem('bookShelve') || [];
    const checkCondition = JSONShelve.length > 0;
    const bookShelve = checkCondition ? Array.from(JSON.parse(JSONShelve)) : [];
    return bookShelve;
  }
}
