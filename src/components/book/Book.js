let bookId = parseInt(localStorage.getItem('bookId'), 10) || 0;

function incrementAndStoreId() {
  bookId += 1;
  localStorage.setItem('bookId', bookId.toString());
}

// TODO Book Creation
export default class Book {
  constructor({ id, title, author, description, pages, finished }) {
    this.id = id !== undefined ? id : bookId;
    if (id === undefined) incrementAndStoreId();
    this.title = title;
    this.author = author;
    this.title = title;
    this.author = author;
    this.description = description || '';
    this.pages = pages;
    this.finished = finished || false;
  }

  toggleFinished() {
    this.finished = !this.finished;
  }
}
