function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('submitBtn');
  submitBtn.innerText = 'Add!';
  return submitBtn;
}

function createCancelBtn() {
  const cancelBtn = document.createElement('button');
  cancelBtn.id = 'cancelFormBtn';
  cancelBtn.innerText = 'x';

  return cancelBtn;
}

const createError = () => {
  const error = document.createElement('div');
  error.classList.add('errorDisplay');

  return error;
};

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
  const error = createError();

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'titleForm');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Title');

  label.append(title);
  label.append(error);

  return label;
}

function getAuthor() {
  const label = createLabel('author');
  const error = createError();

  const author = document.createElement('input');
  author.setAttribute('type', 'text');
  author.setAttribute('id', 'authorForm');
  author.setAttribute('name', 'author');
  author.setAttribute('placeholder', 'Author');

  label.append(author);
  label.append(error);

  return label;
}

function getDescription() {
  const label = createLabel('description');
  const error = createError();

  const description = document.createElement('textarea');
  description.setAttribute('id', 'descriptionForm');
  description.setAttribute('name', 'description');
  description.setAttribute('placeholder', 'Description');

  label.append(description);
  label.append(error);

  return label;
}

function getPages() {
  const label = createLabel('pages');
  const error = createError();

  const pages = document.createElement('input');
  pages.setAttribute('type', 'number');
  pages.setAttribute('min', '1');
  pages.setAttribute('id', 'pagesForm');
  pages.setAttribute('name', 'pages');
  pages.setAttribute('placeholder', 'Pages');

  label.append(pages);
  label.append(error);

  return label;
}

function getFinished() {
  const label = createLabel('finished');
  label.innerText = 'Finished:';

  const finished = document.createElement('input');
  finished.setAttribute('type', 'checkbox');
  finished.setAttribute('id', 'finishedForm');
  finished.setAttribute('name', 'finished');

  label.append(finished);

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

  const finished = getFinished();
  bookInfo.append(finished);

  return bookInfo;
}

function createBookForm() {
  const bookForm = document.createElement('form');
  // bookForm.noValidate = true;
  bookForm.setAttribute('id', 'bookForm');
  bookForm.setAttribute('class', 'bookForm');

  return bookForm;
}

function createBackground() {
  const background = document.createElement('div');
  background.id = 'formBackground';

  return background;
}

export default function createFormElement() {
  const background = createBackground();

  const bookForm = createBookForm();
  background.append(bookForm);

  const formTitle = createFormTitle();
  bookForm.append(formTitle);

  const bookInfo = getBookInfo();
  bookForm.append(bookInfo);

  const cancelBtn = createCancelBtn();
  bookForm.append(cancelBtn);

  const submitBtn = createSubmitBtn();
  bookForm.append(submitBtn);

  return background;
}

// Get data
