let id = parseInt(localStorage.getItem('todoId'), 10) || 0;
console.log(id);

function incrementAndStoreId() {
  id += 1;
  localStorage.setItem('bookId', id.toString());
}

// TODO Book Creation
export default class Book {
  constructor({ title, author, description, pages, read }) {
    this.bookId = incrementAndStoreId();
    this.title = title;
    this.author = author;
    this.title = title;
    this.author = author;
    this.description = description || '';
    this.pages = pages;
    this.read = read || false;
  }

  changeRead() {
    this.read = !this.read;
    return this.read;
  }
}
