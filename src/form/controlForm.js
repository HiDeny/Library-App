export default function controlFormElement(useData) {
  const background = document.getElementById('formBackground');
  const bookForm = document.getElementById('bookForm');
  const cancelBtn = document.getElementById('cancelFormBtn');
  const title = document.getElementById('titleForm');
  const author = document.getElementById('authorForm');
  const description = document.getElementById('descriptionForm');
  const pages = document.getElementById('pagesForm');

  const removeForm = () => background.remove();

  const handleSubmit = () => {
    const data = new FormData(bookForm);
    const bookData = Object.fromEntries(data.entries());
    useData(bookData);
  };

  const checkCustomValidity = (event, errorMessage) => {
    const element = event.target;
    const isValid = element.validity.valueMissing;
    element.setCustomValidity(isValid ? '' : errorMessage);
    console.log(element);
  };

  bookForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(useData);
      removeForm();
    }
  });

  bookForm.addEventListener('submit', (event) => {
    if (
      !title.validity.valid ||
      !author.validity.valid ||
      !description.validity.valid
    ) {
      event.preventDefault();
      console.log(title.checkValidity());
    } else {
      event.preventDefault();
      handleSubmit(useData);
      removeForm();
    }
  });

  cancelBtn.addEventListener('click', () => {
    removeForm();
  });

  title.addEventListener('input', (event) => {
    console.log(event.target.value);
    console.log(event.target.validity.valueMissing);
    checkCustomValidity(event, 'Title is missing!');
  });

  author.addEventListener('input', (event) => {
    checkCustomValidity(event, 'Author is missing!');
  });

  description.addEventListener('input', (event) => {
    checkCustomValidity(event, 'Description is missing!');
  });

  pages.addEventListener('input', (event) => {
    checkCustomValidity(event, 'Pages are missing!');
  });
}
