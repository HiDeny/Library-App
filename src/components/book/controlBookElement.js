import MemoryController from '../../memory/localStorage.js';
import BookShelf from '../bookShelf/bookShelf.js';

const updateStatusClass = (isFinished, statusBtn) => {
  if (isFinished) statusBtn.classList.add('finished');
  if (!isFinished) statusBtn.classList.remove('finished');
};

const updateStatusText = (isFinished) => {
  const newTextContent = isFinished ? `Finished!` : `Let's read!`;
  return newTextContent;
};

const handleClickStatusBtn = (book, statusBtn) => {
  book.toggleFinished();

  const isFinished = book.finished;
  const updatedStatusBtn = statusBtn;

  updateStatusClass(isFinished, updatedStatusBtn);
  updatedStatusBtn.textContent = updateStatusText(isFinished);

  MemoryController.uploadBook(book);
};

function handleClickRemoveBtn(book, card) {
  card.classList.add('toDelete');
  BookShelf.removeBook(book);
  MemoryController.deleteBook(book);
  setTimeout(() => {
    card.remove();
  }, 1300);
}

export default function controlBookElement(
  book,
  { card, statusBtn, removeBtn }
) {
  statusBtn.addEventListener('click', () => {
    handleClickStatusBtn(book, statusBtn);
  });

  removeBtn.addEventListener('click', () => {
    handleClickRemoveBtn(book, card);
  });
}

// // TODO Remove Book

// bookRemoveBtn.addEventListener('click', () => {
//   // Delete from Array
//   this.myLibrary.splice(this.myLibrary.indexOf(book), 1);
//   // Remove from DOM
//   document.getElementById(book.id).remove();
//   let jsonLibrary = JSON.stringify(this.myLibrary);
//   localStorage.setItem('library', jsonLibrary);
// });

//   // TODO Remove Book
//   const bookRemoveBtn = document.createElement('button');
//   bookRemoveBtn.setAttribute('class', 'bookRmvBtn');
//   bookRemoveBtn.textContent += 'x';
//   bookRemoveBtn.addEventListener('click', () => {
//     // Delete from Array
//     this.myLibrary.splice(this.myLibrary.indexOf(book), 1);
//     // Remove from DOM
//     document.getElementById(book.id).remove();
//     let jsonLibrary = JSON.stringify(this.myLibrary);
//     localStorage.setItem('library', jsonLibrary);
//   });

//   bookCardElement.appendChild(bookRemoveBtn);

//   return bookCardElement;
// };

// function removeForm() {
//   formBackground.remove();
// }
