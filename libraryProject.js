//* Variables
//* Functions
//* Algorithms
//* DOM Elements
//* Append DOM Elements
//* Connect functions to DOM

// TODO Store Books
let myLibrary = [];

let localLibJson = localStorage.getItem('library');
if (localLibJson) {
	myLibrary = Array.from(JSON.parse(localLibJson));
} else {
	myLibrary = [];
}

// TODO Book Creation
let localId = localStorage.getItem('id');
if (localId) {
	id = localId;
} else {
	id = 0;
}

function Book(title, author, description = '', pages, read = false) {
	this.title = title;
	this.author = author;
	this.description = description;
	this.pages = pages;
	this.read = read;
	this.id = id++;
}

// TODO Add Book
// Button on top of the page
// Form asking for the book information
function addBookForm() {
	const formOverlay = document.createElement('div');
	formOverlay.setAttribute('class', 'formOverlay');
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
		const newBookDescription = newBookData.description
			? newBookData.description
			: '';
		const newBookPages = newBookData.pages;
		const newBookRead = newBookData.read ? true : false;
		const wholeNewBook = new Book(
			newBookTitle,
			newBookAuthor,
			newBookDescription,
			newBookPages,
			newBookRead
		);
		// Add new Book element
		localStorage.removeItem('library')
		myLibrary.push(wholeNewBook);
		const newBookElement = addBookElement(wholeNewBook);
		let jsonLibrary = JSON.stringify(myLibrary);
		localStorage.setItem('library', jsonLibrary);
		localStorage.setItem('id', id);
		bookShelve.appendChild(newBookElement);
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
	inputTitle.autofocus = true;
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
	inputAuthor.toggleAttribute('required');
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
}

// TODO Display Books
let bookElements = [];
//Create Elements
function addBookElement(book) {
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
	bookReadBtn.setAttribute('class', 'readBtn');
	let bookRead = book.read;
	if (book.read) {
		bookReadBtn.classList.add('finished');
	}
	bookReadBtn.textContent = `${
		bookRead === true ? 'Finished!' : "Let's read!"
	}`;
	// TODO Change Read status
	bookReadBtn.addEventListener('click', (e) => {
		let revertRead = !bookRead;
		bookReadBtn.textContent = `${
			revertRead === true ? 'Finished!' : "Let's read!"
		}`;
		bookReadBtn.classList.toggle('finished');
		bookRead = revertRead;
		book.read = bookRead;
		console.log(book.id);
		console.log(e.target);
		for (let book in myLibrary) {}
		// currentBook = myLibrary[book.id];
		// currentBook.read = revertRead;
		localStorage.removeItem('library');
		let jsonLibrary = JSON.stringify(myLibrary);
		localStorage.setItem('library', jsonLibrary);
		// console.log(localStorage);
		// console.log(myLibrary);
		
	});

	bookCardElement.appendChild(bookReadBtn);

	// TODO Remove Book
	const bookRemoveBtn = document.createElement('button');
	bookRemoveBtn.setAttribute('class', 'bookRmvBtn');
	bookRemoveBtn.textContent += 'x';
	bookRemoveBtn.addEventListener('click', () => {
		// Delete from Array
		myLibrary.splice(myLibrary.indexOf(book), 1);
		// Remove from DOM
		document.getElementById(book.id).remove();
		localStorage.removeItem('library');
		let jsonLibrary = JSON.stringify(myLibrary);
		localStorage.setItem('library', jsonLibrary);		
	});

	bookCardElement.appendChild(bookRemoveBtn);
	// Push to Arr
	bookElements.push(bookCardElement);
	return bookCardElement;
}

// DOM elements modification
// Add book btn
const addBookBtn = document.createElement('button');
addBookBtn.setAttribute('id', 'addBookBtn');
addBookBtn.addEventListener('click', () => {
	bodyDiv.insertBefore(addBookForm(), bodyDiv.firstChild);
});

// DOM Elements
const bodyDiv = document.querySelector('body');
const mainDiv = document.querySelector('#main');
const headerEle = document.querySelector('header');
const bookShelve = document.querySelector('.bookShelve');

headerEle.appendChild(addBookBtn);

//! TESTING
// Populate the library wit examples
// myLibrary.push(
// 	new Book(
// 		"Harry Potter and the Philosopher's Stone",
// 		'J. K. Rowling',
// 		"Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
// 		352
// 	)
// );
// myLibrary.push(
// 	new Book(
// 		'War and Peace',
// 		'Leo Tolstoy',
// 		'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men.',
// 		1392
// 	)
// );
// myLibrary.push(new Book('The Lord Of The Rings', 'J.R.R. Tolkien', '', 1216, true));



createElementsFromLibrary();


// LOCAL STORAGE

function createElementsFromLibrary() {
	const str = localStorage.getItem('library');
	const parsedLib = JSON.parse(str);
	console.log(parsedLib);
	for (let book in parsedLib) {
		addBookElement(parsedLib[book]);
		bookShelve.appendChild(bookElements[book]);
	}
}