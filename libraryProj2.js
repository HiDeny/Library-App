//* Variables
let myLibrary = [];
let localId = 0;

//* DOM Elements
    //* Form
    const formAdd = document.createElement('form');
            formAdd.setAttribute('id', 'bookAddingForm');
            formAdd.setAttribute('class', 'formAdd');
            formAdd.setAttribute('action', '');
            formAdd.setAttribute('method', 'post');

    //* Submit button
	const submitBtn = document.createElement('button');
            submitBtn.setAttribute('type', 'submit');
            submitBtn.setAttribute('class', 'submitBtn');
            submitBtn.innerText = 'Add!';

    //* Cancel button
	const cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancelBtn');
            cancelBtn.innerText = 'x';
	


//* Functions
const Book = (title, author, description = '', pages, read = false) => {
    this.title = title;
	this.author = author;
	this.description = description;
	this.pages = pages;
	this.read = read;
	this.id = id++;
}

const bookForm = () => {

}


//* Algorithms


//* Append DOM Elements


//* Connect functions to DOM