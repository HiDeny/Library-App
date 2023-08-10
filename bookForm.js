

function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('class', 'submitBtn');
  submitBtn.innerText = 'Add!';
  return submitBtn;
}

function createCancelBtn() {
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('class', 'cancelBtn');
  cancelBtn.innerText = 'x';
  cancelBtn.onclick = removeForm;
}

function createLabel(name) {
  const label = document.createElement('label');
  label.setAttribute('for', name);
  return label;
}

function createFormTitle() {
  const formTitle = document.createElement('h3');
  formTitle.textContent = 'New Book';

  return formTitle;
}
function createBookTitleInp() {
  const titleLabel = createLabel('title');

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('placeholder', 'Title');
  titleInput.required = true;

  titleLabel.append(titleInput);

  return titleLabel;
}

function createBookAuthorInp() {
  const authorLabel = createLabel('author');

  const authorInput = document.createElement('input');
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('id', 'author');
  authorInput.setAttribute('name', 'author');
  authorInput.setAttribute('placeholder', 'Author');

  authorLabel.append(authorInput);

  return authorLabel;
}

function createBookDescInp() {
  const descLabel = createLabel('description');

  const descInput = document.createElement('textarea');
  descInput.setAttribute('id', 'description');
  descInput.setAttribute('name', 'description');
  descInput.setAttribute('placeholder', 'Description');

  descLabel.append(descInput);

  return descLabel;
}

function createBookPagesInp() {
  const pagesLabel = createLabel('pages');

  const pagesInput = document.createElement('input');
  pagesInput.setAttribute('type', 'number');
  pagesInput.setAttribute('min', '1');
  pagesInput.setAttribute('id', 'pages');
  pagesInput.setAttribute('name', 'pages');
  pagesInput.setAttribute('placeholder', 'Pages');

  pagesLabel.append(pagesInput);

  return pagesLabel;
}

function createBookReadInp() {
  const readLabel = createLabel('read');
  readLabel.innerText = 'Read:';

  const readInput = document.createElement('input');
  readInput.setAttribute('type', 'checkbox');
  readInput.setAttribute('id', 'read');
  readInput.setAttribute('name', 'read');

  readLabel.append(readInput);

  return readLabel;
}

export default function createForm() {
  const bookForm = document.createElement('form');
  bookForm.setAttribute('id', 'bookForm');
  bookForm.setAttribute('class', 'bookForm');

  const formTitle = createFormTitle();
  bookForm.append(formTitle);

  const bookTitle = createBookTitleInp();
  bookForm.append(bookTitle);

  const bookAuthor = createBookAuthorInp();
  bookForm.append(bookAuthor);

  const bookDescription = createBookDescInp();
  bookForm.append(bookDescription);

  const bookPages = createBookPagesInp();
  bookForm.append(bookPages);

  const bookRead = createBookReadInp();
  bookForm.append(bookRead);

  const cancelBtn = createCancelBtn();
  bookForm.append(cancelBtn);

  const submitBtn = createSubmitBtn();
  bookForm.append(submitBtn);

  return bookForm;
}
