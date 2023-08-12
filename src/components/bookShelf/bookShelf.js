export default class BookShelf {
  static books = [];

  static addBook = (book) => {
    this.books.push(book);
  };

  static removeBook = (bookToRemove) => {
    const findCondition = (book) => book.id === bookToRemove.id;
    const bookIndex = this.books.findIndex(findCondition);

    this.books.splice(bookIndex, 1);
  };
}
