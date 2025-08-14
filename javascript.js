//Read button logic
document.querySelectorAll('.read').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.status === 'yes') {
      button.dataset.status = 'no';
      button.textContent = 'Not Read';
    } else {
      button.dataset.status = 'yes';
      button.textContent = 'Read';
    }
  });
});

//Add button
document.querySelector('.add').addEventListener('click', () => {
  const formContainer = document.querySelector('.form-container');
  formContainer.classList.toggle('open');
});