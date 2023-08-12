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
  const updatedStatusBtn = statusBtn;

  book.toggleFinished();

  updateStatusClass(book.finished, updatedStatusBtn);
  updatedStatusBtn.textContent = updateStatusText(book.finished);

  MemoryController.uploadBook(book);
};

function handleClickRemoveBtn(book, card) {
  card.classList.add('toDelete');
  BookShelf.removeBook(book);
  MemoryController.deleteBook(book);
  setTimeout(() => {
    card.remove();
  }, 1000);
}

export default function controlBookElement(book, card, statusBtn, removeBtn) {
  statusBtn.addEventListener('click', () => {
    handleClickStatusBtn(book, statusBtn);
  });

  removeBtn.addEventListener('click', () => {
    handleClickRemoveBtn(book, card);
  });
}
