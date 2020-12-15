let myLibrary = [
	{
		title: 'title',
		author: 'author',
		year: 'year',
	},
];
const booksList = document.querySelector('#booksList');

// Book.prototype.info = () => {
// 	return `${title}, ${author}, ${year}`;
// };

function Book(title, author, year) {
	// the constructor...
	this.title = title;
	this.author = author;
	this.year = year;
}

function addBookToLibrary() {
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const year = document.querySelector('#year').value;

	// store the new book objects into an array
	const newBook = new Book(title, author, year);
	myLibrary.push(newBook);

	myLibrary.forEach((book) => {
		booksList.innerHTML = `<table>
		<tr>
			<td>${book.title}</td>
		</tr>
		<tr>
			<td>${book.author}</td>
		</tr>
		<tr>
			<td>${book.year}</td>
		</tr>
	</table>`;
	});
}

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	addBookToLibrary();
	// form.reset();
});
