const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

// Route to view a list of all books
router.get('/books', bookController.getAllBooks);

// Route to view details of a specific book by its ID
router.get('/books/:id', bookController.getBookById);

// Route to update a book's details
router.put('/books/:id', bookController.updateBook);

// Route to delete a book by its ID
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;