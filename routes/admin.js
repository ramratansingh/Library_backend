const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add a new book
router.post('/book', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

// Remove a book
router.delete('/book/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// More routes for issuing/returning books, etc.

module.exports = router;
