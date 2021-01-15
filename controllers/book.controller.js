const Book = require("../models/book.model");


class BookController {
    static async apiGetBooks(req, res) {
        const result = await Book.getBooks();
        res.send(result);
    }

    static async apiGetBookById(req, res) {
        const result = await Book.getBookById(req.params.bookId);
        res.send(result);
    }

    // Adds book to a db and then returns it
    static async apiAddBook(req, res) {
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            numOfPages: req.body.numOfPages
        }

        const result = await Book.addBook(newBook);
        const addedBook = await Book.getBookById(result.insertedId);

        res.send(addedBook);
    }

    static async apiRemoveBook(req, res) {
        const result = await Book.removeBook(req.body.id);
        res.send(result);
    }

    static async apiUpdateBook(req, res) {
        const updateDoc = {
            $set: {
                title: req.body.title,
                author: req.body.author,
                numOfPages: req.body.numOfPages
            }
        }

        const result = await Book.updateBook(updateDoc, req.body.id);
        res.send(result);
    }
}

module.exports = BookController;