const userTitle = document.querySelector('[name="title"]');
const userAuthor = document.querySelector('[name="author"]');
const userYear = document.querySelector('[name="year"]');
const userRead = document.querySelector('[name="read"]');
const button = document.querySelector('button');

const booksList = document.querySelector('#booksList');

let myLibrary = [];

//constructor
function Book(title, author, year, read) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.read = read;
}

// uses constructor to add new book to the array
function addToLibrary() {
	const book = new Book(
		userTitle.value,
		userAuthor.value,
		userYear.value,
		userRead.checked
	);
	myLibrary.push(book);
	displayBooks();
}

// function loops through the array
function displayBooks() {
	booksList.innerHTML = ' '; // clears page first
	myLibrary.forEach((book) => {
		// display each book on the page
		booksList.innerHTML += `
		<table class="book">
		<tr><td>${book.title}</td></tr>
		<tr><td>${book.author}</td></tr>
		<tr><td>${book.year}</td></tr>
		<tr><td>${book.read}</td></tr>
		</table>`;
	});
}

button.addEventListener('click', (e) => {
	e.preventDefault(); //prevents refreshing form on click
	addToLibrary();
});

// Add a button on each book’s display to remove the book from the library.

// Add a button on each book’s display to change its read status.

// optional: add localStorage
// optional: add firebase
