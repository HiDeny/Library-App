function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('submitBtn');
  submitBtn.innerText = 'Add!';
  return submitBtn;
}

function createCancelBtn() {
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('cancelFormBtn');
  cancelBtn.innerText = 'x';

  return cancelBtn;
}

function createLabel(name) {
  const label = document.createElement('label');
  label.setAttribute('for', name);
  return label;
}

function createFormTitle() {
  const formTitle = document.createElement('h3');
  formTitle.classList.add('formTitle');
  formTitle.textContent = 'New Book';

  return formTitle;
}
function getTitle() {
  const label = createLabel('title');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'titleForm');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Title');
  title.required = true;

  label.append(title);

  return label;
}

function getAuthor() {
  const label = createLabel('author');

  const author = document.createElement('input');
  author.setAttribute('type', 'text');
  author.setAttribute('id', 'authorForm');
  author.setAttribute('name', 'author');
  author.setAttribute('placeholder', 'Author');

  label.append(author);

  return label;
}

function getDescription() {
  const label = createLabel('description');

  const description = document.createElement('textarea');
  description.setAttribute('id', 'descriptionForm');
  description.setAttribute('name', 'description');
  description.setAttribute('placeholder', 'Description');

  label.append(description);

  return label;
}

function getPages() {
  const label = createLabel('pages');

  const pages = document.createElement('input');
  pages.setAttribute('type', 'number');
  pages.setAttribute('min', '1');
  pages.setAttribute('id', 'pagesForm');
  pages.setAttribute('name', 'pages');
  pages.setAttribute('placeholder', 'Pages');

  label.append(pages);

  return label;
}

function getRead() {
  const label = createLabel('read');
  label.innerText = 'Read:';

  const read = document.createElement('input');
  read.setAttribute('type', 'checkbox');
  read.setAttribute('id', 'readForm');
  read.setAttribute('name', 'read');

  label.append(read);

  return label;
}

function getBookInfo() {
  const bookInfo = document.createElement('div');
  bookInfo.className = 'bookInfo';

  const title = getTitle();
  bookInfo.append(title);

  const author = getAuthor();
  bookInfo.append(author);

  const description = getDescription();
  bookInfo.append(description);

  const pages = getPages();
  bookInfo.append(pages);

  const read = getRead();
  bookInfo.append(read);

  return bookInfo;
}

function createBackground() {
  const background = document.createElement('div');
  background.className = 'formBackground';

  return background;
}

export default function createFormElement(formController, useData) {
  const background = createBackground();

  const bookForm = document.createElement('form');
  bookForm.setAttribute('id', 'bookForm');
  bookForm.setAttribute('class', 'bookForm');
  background.append(bookForm);

  const formTitle = createFormTitle();
  bookForm.append(formTitle);

  const bookInfo = getBookInfo();
  bookForm.append(bookInfo);

  const cancelBtn = createCancelBtn();
  bookForm.append(cancelBtn);

  const submitBtn = createSubmitBtn();
  bookForm.append(submitBtn);

  formController(useData, background, bookForm, cancelBtn);

  return background;
}

// Get data
