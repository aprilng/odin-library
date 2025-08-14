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

document.addEventListener('click', (e) => {
  const clickedReadBtn = e.target.closest('.read');

  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const readBtn = dropdown.querySelector('.read');

    if (clickedReadBtn && dropdown === clickedReadBtn.closest('.dropdown')) {
      // Toggle the clicked dropdown
      const isOpen = dropdown.classList.toggle('show');
      
      // Update button style
      if (isOpen) {
        readBtn.classList.add('active');
      } else {
        readBtn.classList.remove('active');
      }
    } else {
      // Close all other dropdowns
      dropdown.classList.remove('show');
      readBtn.classList.remove('active');
    }
  });
});





