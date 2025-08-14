document.querySelectorAll('.dropdown').forEach(dropdown => {
    const readButton = dropdown.querySelector('.read');
    const menu = dropdown.querySelector('.dropdown-menu');
    const items = dropdown.querySelectorAll('.dropdown-item');

    readButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            dropdown.setAttribute('data-status', value);
            dropdown.classList.remove('show');
        });
    });
});

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