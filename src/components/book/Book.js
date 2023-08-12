let bookId = parseInt(localStorage.getItem('todoId'), 10) || 0;

function incrementAndStoreId() {
  bookId += 1;
  localStorage.setItem('bookId', bookId.toString());
}

// TODO Book Creation
export default class Book {
  constructor({ title, author, description, pages, finished }) {
    this.id = bookId;
    incrementAndStoreId();
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
