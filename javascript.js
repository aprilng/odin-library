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

//Create a new book
const form = document.querySelector('.form-inputs');
const list = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // grab form values
    const title  = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages  = document.getElementById('book-pages').value;
    const file   = document.getElementById('cover-input').files[0];

    // checkbox in the form (default unchecked = "no")
    const isRead = document.getElementById('read').checked; 
    const status = isRead ? 'yes' : 'no';
    const label  = isRead ? 'Read' : 'Not Read';

    const coverSrc = file ? URL.createObjectURL(file) : 'images/thumbnails/default-thumbnail.svg';

    // create card element
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="thumbnail-container">
        <button class="remove" aria-label="Remove">
            <img src="images/remove.svg" alt="Remove" class="remove-icon"/>
        </button>
        <div class="image-container">
            <img src="${coverSrc}" class="thumbnail" alt="${title} cover"/>
        </div>
        </div>
        <div class="info">
        <h2>${title}</h2>
        <p class="author">${author}</p>
        <p class="page">${pages} pages</p>
        <button class="read" data-status="${status}" aria-pressed="${isRead}">${label}</button>
        </div>
    `;

        // Add the new card to the grid
        list.prepend(card);

        form.reset();

        document.querySelector('.form-container').classList.remove('open');
});

//Close form
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'none';
});

//Remove book
list.addEventListener('click', (e) => {
  if (e.target.closest('.remove')) {
    const card = e.target.closest('.card');
    card.remove();
  }
});