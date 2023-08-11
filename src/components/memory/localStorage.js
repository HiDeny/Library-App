export default class MemoryController {
  static downloadBook(book) {
    const JSONBook = localStorage.getItem(book.id);
    return JSON.parse(JSONBook);
  }

  static uploadBook = (book) => {
    const bookToJSON = JSON.stringify(book);
    localStorage.setItem(book.id, bookToJSON);
  };

  static downloadBookShelve() {
    const JSONShelve = localStorage.getItem('bookShelve');
    if (!JSONShelve) return;
    return Array.from(JSON.parse(JSONShelve));
  }

  static uploadBookShelve(library) {
    const shelveToJSON = JSON.stringify(library);
    localStorage.setItem('bookShelve', shelveToJSON);
  }
}
