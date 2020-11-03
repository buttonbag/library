const titleField = document.querySelector('input[name="title"]');
const form = document.querySelector('form');
const booksList = document.querySelector('#booksList');

let myLibrary = [];

function Book(title, author, year) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.year = year;
	console.log(title, author, year);
}

function addBookToLibrary(elm) {
	// do stuff here
	myLibrary.push(elm);
	booksList.innerHTML = myLibrary.join(', ');
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const myBook = titleField.value;
	addBookToLibrary(myBook);
	titleField.value = '';
});
