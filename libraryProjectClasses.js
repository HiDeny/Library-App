import Book from './book.js';

function downloadLibrary() {
  const localLibJson = localStorage.getItem('library');
  return Array.from(JSON.parse(localLibJson));
}

function uploadLibrary(library) {
  let libraryToJSON = JSON.stringify(this.library);
  localStorage.setItem('library', libraryToJSON);
}

function initBookShelve() {
  const libraryObj = downloadLibrary();
  const bookShelve = [];

  if (!libraryObj) return bookShelve;

  const bookObjArr = Object.values(libraryObj);
  bookObjArr.forEach((book) => bookShelve.push(new Book(book)));

  return bookShelve;
}

function removeForm() {
  formOverlay.remove();
}

function handleSubmit(handleSubmitReturn) {
  const myFormData = new FormData(e.target);
  const newBookData = Object.fromEntries(myFormData.entries());
  const wholeNewBook = new Book(newBookData);
  handleSubmitReturn(wholeNewBook);
}

// TODO Store Books
class Library {
  bookShelve = initBookShelve();

  // TODO Add Book function
  addBookForm = () => {
    //* Overlay
    const formOverlay = document.createElement('div');
    formOverlay.setAttribute('class', 'formOverlay');

    //* Form
    const formAdd = document.createElement('form');
    formAdd.setAttribute('id', 'bookForm');
    formAdd.setAttribute('class', 'formAdd');
    formAdd.setAttribute('action', '');
    formAdd.setAttribute('method', 'post');
    // Prevent submit and get data
    formAdd.addEventListener('submit', (e) => {
      e.preventDefault();
      let myFormData = new FormData(e.target);
      console.log([...myFormData.entries()]);

      const newBookData = Object.fromEntries(myFormData.entries());
      console.log(newBookData);
      // Create new instance of a book
      const wholeNewBook = new Book(
        newBookData.title,
        newBookData.author,
        newBookData.description,
        newBookData.pages,
        newBookData.read
      );

      // Add new Book element
      this.myLibrary.push(wholeNewBook);
      const newBookElement = this.createBookElement(wholeNewBook);
      bookShelve.appendChild(newBookElement);

      localStorage.setItem('id', wholeNewBook.id);
      let jsonLibrary = JSON.stringify(this.myLibrary);
      localStorage.setItem('library', jsonLibrary);
      // Remove form after adding
      formOverlay.remove();
    });

    //* Submit button
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('class', 'submitBtn');
    submitBtn.innerText = 'Add!';

    //* Cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.innerText = 'x';
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      formOverlay.remove();
    });

    //* Form Title
    const formTitle = document.createElement('h3');
    formTitle.textContent = 'New Book';
    //* UL - LI
    const unList = document.createElement('ul');
    unList.setAttribute('class', 'formContent');

    //* Label - Title
    const liTitle = document.createElement('li');
    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'title');
    // Input - Title
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'title');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('placeholder', 'Title');
    inputTitle.toggleAttribute('required');
    // Append
    labelTitle.appendChild(inputTitle);
    liTitle.appendChild(labelTitle);

    //* Label - Author
    const liAuthor = document.createElement('li');
    const labelAuthor = document.createElement('label');
    labelAuthor.setAttribute('for', 'author');
    // Input - Author
    const inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('type', 'text');
    inputAuthor.setAttribute('id', 'author');
    inputAuthor.setAttribute('name', 'author');
    inputAuthor.setAttribute('placeholder', 'Author');
    // Append
    labelAuthor.appendChild(inputAuthor);
    liAuthor.appendChild(labelAuthor);

    //* Label - Description
    const liDescription = document.createElement('li');
    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for', 'description');
    // Input - Description
    const inputDescription = document.createElement('textarea');
    inputDescription.setAttribute('id', 'description');
    inputDescription.setAttribute('name', 'description');
    inputDescription.setAttribute('placeholder', 'Description:');
    // Append
    labelDescription.appendChild(inputDescription);
    liDescription.appendChild(labelDescription);

    //* Label - Pages
    const liPages = document.createElement('li');
    const labelPages = document.createElement('label');
    labelPages.setAttribute('for', 'pages');
    // Input - Number of pages
    const inputPages = document.createElement('input');
    inputPages.setAttribute('type', 'number');
    inputPages.setAttribute('min', '1');
    inputPages.setAttribute('id', 'pages');
    inputPages.setAttribute('name', 'pages');
    inputPages.setAttribute('placeholder', 'Pages');
    // Append
    labelPages.appendChild(inputPages);
    liPages.appendChild(labelPages);

    //* Label - Read
    const liRead = document.createElement('li');
    const labelRead = document.createElement('label');
    labelRead.setAttribute('for', 'read');
    labelRead.innerText = 'Read:';
    // Input - Read (checkbox);
    const inputRead = document.createElement('input');
    inputRead.setAttribute('type', 'checkbox');
    inputRead.setAttribute('id', 'read');
    inputRead.setAttribute('name', 'read');
    // inputRead.toggleAttribute('required');
    // Append
    labelRead.appendChild(inputRead);
    liRead.appendChild(labelRead);

    // Append inputs to form
    formOverlay.appendChild(formAdd);
    formAdd.appendChild(formTitle);
    formAdd.appendChild(unList);
    unList.appendChild(liTitle);
    unList.appendChild(liAuthor);
    unList.appendChild(liDescription);
    unList.appendChild(liPages);
    unList.appendChild(liRead);
    unList.appendChild(submitBtn);
    unList.appendChild(cancelBtn);

    return formOverlay;
  };

  // Create book element for display
  createBookElement = (book) => {
    // Card
    const bookCardElement = document.createElement('div');
    bookCardElement.setAttribute('id', `${book.id}`);
    bookCardElement.setAttribute('class', `bookCard`);
    // Book Header
    const bookHeader = document.createElement('div');
    bookHeader.setAttribute('class', `bookHeader`);
    bookCardElement.appendChild(bookHeader);
    // Title
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = `${book.title}`;

    bookHeader.appendChild(bookTitle);
    // Author
    const bookAuthor = document.createElement('h3');
    bookAuthor.textContent += `${book.author}`;

    bookHeader.appendChild(bookAuthor);
    // Description
    const bookDescriptionEle = document.createElement('div');
    bookDescriptionEle.setAttribute('class', 'descriptionDiv');

    const bookDescription = document.createElement('p');
    bookDescription.setAttribute('class', 'description');

    bookDescription.textContent += `${book.description}`;

    bookCardElement.appendChild(bookDescriptionEle);
    bookDescriptionEle.appendChild(bookDescription);
    // Pages
    const bookPages = document.createElement('p');
    bookPages.setAttribute('class', 'pages');
    bookPages.textContent += `Pages: ${book.pages}`;

    bookCardElement.appendChild(bookPages);
    // Read
    const bookReadBtn = document.createElement('button');
    bookReadBtn.setAttribute('class', `readBtn ${book.id}`);
    let bookRead = book.read;
    if (book.read) {
      bookReadBtn.classList.add('finished');
      bookReadBtn.textContent = 'Finished!';
    } else {
      bookReadBtn.textContent = "Let's read!";
    }
    // TODO Change Read status
    bookReadBtn.addEventListener('click', () => {
      bookRead = book.changeRead();
      bookReadBtn.textContent = `${
        bookRead === true ? 'Finished!' : "Let's read!"
      }`;
      bookReadBtn.classList.toggle('finished');
      let jsonLibrary = JSON.stringify(this.myLibrary);
      localStorage.setItem('library', jsonLibrary);
    });

    bookCardElement.appendChild(bookReadBtn);

    // TODO Remove Book
    const bookRemoveBtn = document.createElement('button');
    bookRemoveBtn.setAttribute('class', 'bookRmvBtn');
    bookRemoveBtn.textContent += 'x';
    bookRemoveBtn.addEventListener('click', () => {
      // Delete from Array
      this.myLibrary.splice(this.myLibrary.indexOf(book), 1);
      // Remove from DOM
      document.getElementById(book.id).remove();
      let jsonLibrary = JSON.stringify(this.myLibrary);
      localStorage.setItem('library', jsonLibrary);
    });

    bookCardElement.appendChild(bookRemoveBtn);

    return bookCardElement;
  };

  // TODO Display Books
  displayBooks = () => {
    for (let book in this.myLibrary) {
      let bookToAdd = this.createBookElement(this.myLibrary[book]);
      bookShelve.appendChild(bookToAdd);
    }
  };
}

// DOM Elements
const bodyDiv = document.querySelector('body');
const mainDiv = document.querySelector('#main');
const headerEle = document.querySelector('header');
const bookShelve = document.querySelector('.bookShelve');

// Add book button
const addBookBtn = document.createElement('button');
addBookBtn.setAttribute('id', 'addBookBtn');
addBookBtn.addEventListener('click', () => {
  bodyDiv.appendChild(activeLib.addBookForm());
  document.getElementById('title').focus();
});
headerEle.appendChild(addBookBtn);

// initial run
const activeLib = new Library();
// activeLib.librarySetup();
activeLib.displayBooks();
