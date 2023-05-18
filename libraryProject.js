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
}

// TODO Add Book
// Button on top of the page
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
		const newBookTitle = newBookData.title;
		const newBookAuthor = newBookData.author;
		const newBookPages = newBookData.pages;
		const newBookRead = newBookData.read ? true : false;
		const wholeNewBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
		// Add new Book element
		myLibrary.push(wholeNewBook);
		const newBookElement = addBookElement(wholeNewBook);
		bookShelve.appendChild(newBookElement);
		// Remove form after adding
		const form = document.getElementById('bookAddingForm');
		form.remove();
	});

	//* Submit button
	const submitBtn = document.createElement('button');
	submitBtn.setAttribute('type', 'submit');
	submitBtn.innerText = 'Add!';

	//* Cancel button
	const cancelBtn = document.createElement('button');
	cancelBtn.innerText = 'x';
	cancelBtn.addEventListener('click', (e) => {
		e.preventDefault();
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

	// Append inputs to form
	formAdd.appendChild(unList);
	unList.appendChild(liTitle);
	unList.appendChild(liAuthor);
	unList.appendChild(liPages);
	unList.appendChild(liRead);
	unList.appendChild(submitBtn);
	unList.appendChild(cancelBtn);

	return formAdd;
}

// TODO Display Books
let bookElements = [];
//Create Elements
function addBookElement(book) {
	// Card
	const bookCardElement = document.createElement('div');
	bookCardElement.setAttribute('id', `${book.id}`);
	bookCardElement.setAttribute('class', `bookCard`);
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
	const bookReadBtn = document.createElement('button');
	let bookRead = book.read;
	bookReadBtn.textContent = `${bookRead === true ? 'Finished!' : "Let's read!"}`;
	bookReadBtn.style.backgroundColor = `${bookRead === true ? 'gray' : "greenyellow"}`
// TODO Change Read status
	bookReadBtn.addEventListener('click', () => {
		let revertRead = !bookRead;
		bookReadBtn.textContent = `${revertRead === true ? 'Finished!' : "Let's read!"}`;
		bookReadBtn.style.backgroundColor = `${revertRead === true ? 'gray' : "greenyellow"}`;
		bookRead = revertRead;
		book.read = bookRead;
	})

	bookCardElement.appendChild(bookReadBtn);

// TODO Remove Book
	const bookRemoveBtn = document.createElement('button');
	bookRemoveBtn.textContent += `x`;
	bookRemoveBtn.addEventListener('click', () => {
		// Delete from Array
		myLibrary.splice(myLibrary.indexOf(book), 1);
		// Remove from DOM
		document.getElementById(book.id).remove();
	});

	bookCardElement.appendChild(bookRemoveBtn);
	// Push to Arr
	//! Useless
	bookElements.push(bookCardElement);
	return bookCardElement;
}

//! Useless
function createElementsFromLibrary() {
	for (let book in myLibrary) {
		addBookElement(myLibrary[book]);
		bookShelve.appendChild(bookElements[book]);
	}
}


// DOM elements modification
// Add book btn
const addBookButton = document.querySelector('#addBookButton');
addBookButton.addEventListener('click', () => {
	bookShelve.appendChild(addBookForm());
})

// DOM Elements
const mainDiv = document.querySelector('#main');
const bookShelve = document.querySelector('.bookShelve');


//! TESTING
// Populate the library wit examples
myLibrary.push(new Book('Title of the book', 'Someone wrote it', 10));
myLibrary.push(new Book('Title 2', 'Someone wrote it 2', 50));
myLibrary.push(new Book('Title 3', 'wrote it 2', 40));


//! Useless
createElementsFromLibrary();
