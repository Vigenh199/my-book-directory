const express = require('express');
const BookController = require('../controllers/book.controller');

const bookRouter = express.Router();

bookRouter.route('/api/books')
    .get(BookController.apiGetBooks)
    .post(BookController.apiAddBook);

bookRouter.route('/api/books/:bookId')
    .get(BookController.apiGetBookById)
    .put(BookController.apiUpdateBook)
    .delete(BookController.apiRemoveBook);

module.exports = bookRouter;