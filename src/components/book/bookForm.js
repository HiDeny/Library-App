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
  // cancelBtn.onclick = removeForm;
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
function getTitle() {
  const label = createLabel('title');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
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
  author.setAttribute('id', 'author');
  author.setAttribute('name', 'author');
  author.setAttribute('placeholder', 'Author');

  author.append(author);

  return label;
}

function getDescription() {
  const label = createLabel('description');

  const description = document.createElement('textarea');
  description.setAttribute('id', 'description');
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
  pages.setAttribute('id', 'pages');
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
  read.setAttribute('id', 'read');
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

export default function createForm() {
  const bookForm = document.createElement('form');
  bookForm.setAttribute('id', 'bookForm');
  bookForm.setAttribute('class', 'bookForm');

  const formTitle = createFormTitle();
  bookForm.append(formTitle);

  const bookInfo = getBookInfo();
  bookForm.append(bookInfo);

  const cancelBtn = createCancelBtn();
  bookForm.append(cancelBtn);

  const submitBtn = createSubmitBtn();
  bookForm.append(submitBtn);

  console.log(bookForm);

  return bookForm;
}
