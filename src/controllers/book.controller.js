const Book = require("../models/book.model.js");

// Controller function to add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    if (!title || !author || !summary)
      res.status(400).json({ message: "title/author/summary cannot be empty" });

    // Check if a book with the same title and author already exists
    const existingBook = await Book.findOne({ title, author });

    // If a book with the same title and author exists, throw an error
    if (existingBook)
      return res.status(400).json({
        message: "A book already exists",
      });

    // Create new book
    const newBook = await Book.create({ title, author, summary });

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding the book" });
  }
};

// Controller function to view a list of all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ message: "success", books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json({ message: "success", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the book" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the book" });
  }
};

// Controller function to delete a book by its ID
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });

    res.json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the book" });
  }
};
