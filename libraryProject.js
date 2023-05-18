//* Variables
//* Functions
//* Algorithms
//* DOM Elements
//* Append DOM Elements
//* Connect functions to DOM

// TODO Store Books

let myLibrary = [];

// TODO Book Creation
let id = 0;

function Book(title, author, pages, read = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = id++;
	// this.info = () => {
	// 	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}, ${this.id}`;
	// };
}

// TODO Add Book
// Button on top of the page


function addBookToLib(book) {
	myLibrary.push(book);
}

// Form asking for the book information
function addBookForm() {
	//* Form
	const formAdd = document.createElement('form');
	formAdd.setAttribute('id', 'bookAddingForm');
	formAdd.setAttribute('class', 'formAdd');
	formAdd.setAttribute('action', '');
	formAdd.setAttribute('method', 'post');
	// Prevent submit and get data
	formAdd.addEventListener('submit', (e) => {
		e.preventDefault();
		let myFormData = new FormData(e.target);
		const newBookData = Object.fromEntries(myFormData.entries());
		// Create new instance of a book
		const newBookRead = newBookData.read ? true : false;
		const wholeNewBook = new Book(newBookData.title, newBookData.author, newBookData.pages, newBookRead, newBookRead);
		// Add new Book element
		addBookToLib(wholeNewBook);
		console.log(wholeNewBook);
		const newBookElement = addBookElement(wholeNewBook);
		bookShelve.appendChild(newBookElement);

		const form = document.getElementById('bookAddingForm');
		form.remove();
	});

	//* UL - LI
	const unList = document.createElement('ul');

	//* Label - Title
	const liTitle = document.createElement('li');
	const labelTitle = document.createElement('label');
	labelTitle.setAttribute('for', 'title');
	labelTitle.innerText = 'Title:';
	// Input - Title
	const inputTitle = document.createElement('input');
	inputTitle.setAttribute('type', 'text');
	inputTitle.setAttribute('id', 'title');
	inputTitle.setAttribute('name', 'title');
	inputTitle.toggleAttribute('required');
	// Append
	labelTitle.appendChild(inputTitle);
	liTitle.appendChild(labelTitle);

	//* Label - Author
	const liAuthor = document.createElement('li');
	const labelAuthor = document.createElement('label');
	labelAuthor.setAttribute('for', 'author');
	labelAuthor.innerText = 'Author:';
	// Input - Author
	const inputAuthor = document.createElement('input');
	inputAuthor.setAttribute('type', 'text');
	inputAuthor.setAttribute('id', 'author');
	inputAuthor.setAttribute('name', 'author');
	inputAuthor.toggleAttribute('required');
	// Append
	labelAuthor.appendChild(inputAuthor);
	liAuthor.appendChild(labelAuthor);

	//* Label - Pages
	const liPages = document.createElement('li');
	const labelPages = document.createElement('label');
	labelPages.setAttribute('for', 'pages');
	labelPages.innerText = 'Pages:';
	// Input - Number of pages
	const inputPages = document.createElement('input');
	inputPages.setAttribute('type', 'number');
	inputPages.setAttribute('id', 'pages');
	inputPages.setAttribute('name', 'pages');
	inputPages.toggleAttribute('required');
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
	inputRead.setAttribute('id', 'Read');
	inputRead.setAttribute('name', 'read');
	// inputRead.toggleAttribute('required');
	// Append
	labelRead.appendChild(inputRead);
	liRead.appendChild(labelRead);

	//* Submit button
	const submitBtn = document.createElement('button');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.innerText = 'Add!';

	// Append inputs to form
	formAdd.appendChild(unList);
	unList.appendChild(liTitle);
	unList.appendChild(liAuthor);
	unList.appendChild(liPages);
	unList.appendChild(liRead);
	unList.appendChild(submitBtn);

	return formAdd;
}

// TODO Remove Book

function removeBook(event) {
	const theBookID = event.target.id;
	// Delete from Array
	const bookToDelArr = myLibrary.indexOf(
		myLibrary.find((book) => book.id === Number(theBookID))
	);
	myLibrary.splice(bookToDelArr, 1);
	// Remove from DOM
	const theBookToDelete = document.getElementsByClassName(
		`book${theBookID}`
	)[0];
	theBookToDelete.remove();
}

// TODO Change Read status
// ID?
// Toggle button
function changeRead() {}

// Populate the library wit examples

addBookToLib(new Book('Title of the book', 'Someone wrote it', 10));
addBookToLib(new Book('Title 2', 'Someone wrote it 2', 50));
addBookToLib(new Book('Title 3', 'wrote it 2', 40));
// console.log(myLibrary);

// removeBook(1);
// removeBook(2);

// console.log(myLibrary);

// TODO Display Books
let bookElements = [];
//Create Elements
function addBookElement(book) {
	// Card
	const bookCardElement = document.createElement('div');
	bookCardElement.setAttribute('class', `bookCard book${book.id}`);
	// Title
	const bookTitle = document.createElement('h2');
	bookTitle.innerText = `${book.title}`;

	bookCardElement.appendChild(bookTitle);
	// Author
	const bookAuthor = document.createElement('h3');
	bookAuthor.textContent += `${book.author}`;

	bookCardElement.appendChild(bookAuthor);
	// Pages
	const bookPages = document.createElement('p');
	bookPages.textContent += `${book.pages}`;

	bookCardElement.appendChild(bookPages);
	// Read
	const bookRead = document.createElement('button');
	let finishedReading = book.read === true ? 'Finished!' : "Let's read!";
	bookRead.textContent += `${finishedReading}`;

	bookCardElement.appendChild(bookRead);
	// Remove
	const bookRemoveBtn = document.createElement('button');
	bookRemoveBtn.setAttribute('id', `${book.id}`);
	bookRemoveBtn.textContent += `X`;
	bookRemoveBtn.addEventListener('click', removeBook);

	bookCardElement.appendChild(bookRemoveBtn);
	// Push to Arr
	bookElements.push(bookCardElement);
	return bookCardElement;
}

function createElementsFromLibrary() {
	for (let book in myLibrary) {
		addBookElement(myLibrary[book]);
		bookShelve.appendChild(bookElements[book]);
	}
}

// DOM elements modification

// DOM Elements

//! TESTING
const mainDiv = document.querySelector('#main');
const bookShelve = document.querySelector('.bookShelve');
const addBookButton = document.querySelector('#addBookButton');
const form = addBookForm();
addBookButton.addEventListener('click', () => {
	const form = addBookForm();
	bookShelve.appendChild(form);
})
// hide form

createElementsFromLibrary();
