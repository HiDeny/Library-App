export default function controlFormElement(useData) {
  const background = document.getElementById('formBackground');
  const bookForm = document.getElementById('bookForm');
  const cancelBtn = document.getElementById('cancelFormBtn');
  const title = document.getElementById('titleForm');
  const author = document.getElementById('authorForm');
  const description = document.getElementById('descriptionForm');
  const pages = document.getElementById('pagesForm');

  const allInputs = [
    { element: title, errorMessage: 'Title is missing!' },
    { element: author, errorMessage: 'Author is missing!' },
    { element: description, errorMessage: 'Description is missing!' },
    { element: pages, errorMessage: 'Pages are missing!' },
  ];

  const removeForm = () => background.remove();

  const handleSubmit = () => {
    const data = new FormData(bookForm);
    const bookData = Object.fromEntries(data.entries());
    useData(bookData);
  };

  const getUpdate = (isValid, errorMessage) => {
    if (isValid) return { add: 'success', remove: 'error', error: '' };
    return { add: 'error', remove: 'success', error: errorMessage };
  };

  const validateInput = (input, errorMessage) => {
    const isValid = input.value.trim() !== '';

    const elementLabel = input.parentElement;
    const errorDisplay = elementLabel.querySelector('.errorDisplay');

    const update = getUpdate(isValid, errorMessage);

    input.classList.add(update.add);
    input.classList.remove(update.remove);
    errorDisplay.textContent = update.error;

    return isValid;
  };

  const validateAll = () => {
    const filter = (input) =>
      validateInput(input.element, input.errorMessage) === false;
    return allInputs.filter(filter);
  };

  bookForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const notValid = validateAll();
      console.log(notValid);
      if (notValid.length > 0) return;

      handleSubmit(useData);
      removeForm();
    }
  });

  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const notValid = validateAll();
    console.log(notValid);
    if (notValid.length > 0) return;

    handleSubmit(useData);
    removeForm();
  });

  allInputs.forEach((input) => {
    const { element } = input;
    const { errorMessage } = input;

    element.addEventListener('input', ({ target }) => {
      validateInput(target, errorMessage);
    });
  });

  cancelBtn.addEventListener('click', () => {
    removeForm();
  });

  // title.addEventListener('input', ({ target }) => {});

  // author.addEventListener('input', ({ target }) => {
  //   validateInput(target, 'Author is missing!');
  // });

  // description.addEventListener('input', ({ target }) => {
  //   validateInput(target, 'Description is missing!');
  // });

  // pages.addEventListener('input', ({ target }) => {
  //   validateInput(target, 'Pages are missing!');
  // });
}
