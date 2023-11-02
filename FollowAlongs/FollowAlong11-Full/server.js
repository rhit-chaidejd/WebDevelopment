/* Creating new Promise */
const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());
app.use(express.static('public'));

/* Create path for book storage */
const booksFilePath = './data/books.json';

/* Create ReadBooks() async function: 
it reads a list of books from a JSON file 
and return it as a JavaScript object
*/
async function ReadBooks() {
    try {
        const data = await fs.readFile(booksFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading books:', error);
        return [];
    }
}

/* Now, create WriteBooks() async function: 
has a 'books' parameter (array or object) to
write into the JSON file, returns a promise
*/
async function WriteBooks(books) {
    try {
        // Stringify converts the books object or array into
        // a JSON-formatted string
        // Stringify's parameters:
        // - The value to convert to a JSON string
        // - A replacer function or an array that transforms the results (here null)
        // - The number of spaces to use for indentation in pretty-printing the result (here Each level in the JSON structure will be indented with 2 spaces)

        await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing books:', error);
    }
}

/* Next step, PORT */
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

/* Then, GET */
app.get('/books', async (req, res) => {
    const books = await ReadBooks();
    res.json(books);
});

/* Then, POST */
app.post('/books', async (req, res) => {
    const { title, author } = req.body;
    const books = await ReadBooks();
    const newId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
    const newBook = { id: newId, title, author };
    books.push(newBook);
    await WriteBooks(books);
    res.status(201).json(newBook);
});

/* Then, PUT */
app.put('/books/:id', async (req, res) => {
    const { title, author } = req.body;
    const { id } = req.params;
    const books = await ReadBooks();
    const book = books.find(book => book.id === parseInt(id, 10));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    book.title = title || book.title;
    book.author = author || book.author;

    await WriteBooks(books);
    res.json(books[bookIndex]);
});

/* Then, DELETE */
app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await ReadBooks();
    const initialLength = books.length;
    const remainingBooks = books.filter(book => book.id !== parseInt(id, 10));

    if (remainingBooks.length === initialLength) {
        return res.status(404).json({ error: 'Book not found' });
    }
    await WriteBooks(remainingBooks);
    res.json({ message: 'Book successfully deleted' });
});

