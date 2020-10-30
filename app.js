const titleField = document.querySelector(
	'input[name="title"]'
);
const form = document.querySelector('form');
const booksList = document.querySelector('#booksList');

let myLibrary = [];

function Book() {
	// the constructor...
}

function addBookToLibrary(elm) {
	// do stuff here
	myLibrary.push(elm);
	const newItem = document.createElement('li');
	booksList.appendChild(newItem).innerHTML += myLibrary;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const myBook = titleField.value;
	addBookToLibrary(myBook);
	titleField.value = '';
});
