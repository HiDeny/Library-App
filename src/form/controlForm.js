const removeForm = (background) => background.remove();

const handleSubmit = (bookForm, useData) => {
  const data = new FormData(bookForm);
  const bookData = Object.fromEntries(data.entries());
  useData(bookData);
};

export default function controlFormElement(
  useData,
  background,
  bookForm,
  cancelBtn
) {
  bookForm.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(bookForm, useData);
      removeForm(background);
    }
  });

  bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit(bookForm, useData);
    removeForm(background);
  });

  cancelBtn.addEventListener('click', () => {
    removeForm(background);
  });
}
