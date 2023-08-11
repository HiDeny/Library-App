function createTitle(book) {
  const title = document.createElement('h2');
  title.classList.add('cardTitle');
  title.innerText = `${book.title}`;

  return title;
}

function createAuthor(book) {
  const author = document.createElement('h3');
  author.classList.add('cardAuthor');
  author.textContent = `${book.author}`;

  return author;
}

function createDescription(book) {
  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.textContent = `${book.description}`;

  return description;
}

function createPages(book) {
  const pages = document.createElement('p');
  pages.classList.add('cardPages');
  pages.textContent = `Pages: ${book.pages}`;

  return pages;
}

function createRead() {
  const read = document.createElement('button');
  read.classList.add('cardReadBtn');
  read.textContent = 'Read!';

  return read;
}

function createRemoveBtn() {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('cardRemoveBtn');
  removeBtn.textContent += 'x';

  return removeBtn;
}

function createCard(book) {
  const card = document.createElement('div');
  card.setAttribute('id', `${book.id}`);
  card.classList.add('bookCard');

  return card;
}

export default function createBookElement(book) {
  const card = createCard(book);

  const title = createTitle(book);
  card.append(title);

  const author = createAuthor(book);
  card.append(author);

  const description = createDescription(book);
  card.append(description);

  const pages = createPages(book);
  card.append(pages);

  const read = createRead();
  card.append(read);

  const removeBtn = createRemoveBtn();
  card.append(removeBtn);

  return card;
}
