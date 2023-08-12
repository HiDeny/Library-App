import MemoryController from '../../memory/localStorage.js';

const updateStatusClass = (isFinished, statusBtn) => {
  if (isFinished) statusBtn.classList.add('finished');
  if (!isFinished) statusBtn.classList.remove('finished');
};

const updateStatusText = (isFinished) => {
  const newTextContent = isFinished ? `Finished!` : `Let's read!`;
  return newTextContent;
};

function handleClickStatusBtn(book, statusBtn) {
  book.toggleFinished();

  const isFinished = book.finished;
  const updatedStatusBtn = statusBtn;

  updateStatusClass(isFinished, updatedStatusBtn);
  updatedStatusBtn.textContent = updateStatusText(isFinished);

  MemoryController.uploadBook(book);
}

export default function controlBookElement(book, statusBtn, removeBtn) {
  statusBtn.addEventListener('click', () => {
    handleClickStatusBtn(book, statusBtn);
  });

  removeBtn.addEventListener('click', () => {
    handleClickStatusBtn(book, statusBtn);
  });
}

// if (book.read) {
//   bookReadBtn.classList.add('finished');
//   bookReadBtn.textContent = 'Finished!';
// } else {
//   bookReadBtn.textContent = "Let's read!";
// }
// // TODO Change Read status
// bookReadBtn.addEventListener('click', () => {
//   bookRead = book.changeRead();
//   bookReadBtn.textContent = `${
//     bookRead === true ? 'Finished!' : "Let's read!"
//   }`;
//   bookReadBtn.classList.toggle('finished');
//   let jsonLibrary = JSON.stringify(this.myLibrary);
//   localStorage.setItem('library', jsonLibrary);
// });

// bookCardElement.appendChild(bookReadBtn);

// // TODO Remove Book

// bookRemoveBtn.addEventListener('click', () => {
//   // Delete from Array
//   this.myLibrary.splice(this.myLibrary.indexOf(book), 1);
//   // Remove from DOM
//   document.getElementById(book.id).remove();
//   let jsonLibrary = JSON.stringify(this.myLibrary);
//   localStorage.setItem('library', jsonLibrary);
// });

// initForm = () => {
//   // Create book element for display

//   const bookReadBtn = document.createElement('button');
//   bookReadBtn.setAttribute('class', `readBtn ${book.id}`);
//   let bookRead = book.read;
//   if (book.read) {
//     bookReadBtn.classList.add('finished');
//     bookReadBtn.textContent = 'Finished!';
//   } else {
//     bookReadBtn.textContent = "Let's read!";
//   }
//   // TODO Change Read status
//   bookReadBtn.addEventListener('click', () => {
//     bookRead = book.changeRead();
//     bookReadBtn.textContent = `${
//       bookRead === true ? 'Finished!' : "Let's read!"
//     }`;
//     bookReadBtn.classList.toggle('finished');
//     let jsonLibrary = JSON.stringify(this.myLibrary);
//     localStorage.setItem('library', jsonLibrary);
//   });

//   bookCardElement.appendChild(bookReadBtn);

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
