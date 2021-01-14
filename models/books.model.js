const { ObjectId } = require('mongodb');

let books;

export default class Book {
    static async injectDB(conn) {
        if (books) {
            return;
        }
        try {
            books = await conn.db('myApps').collection('books');
        }
        catch (e) {
            console.error(`Unable establish a connection handle in Book: ${e}`);
        }
    }

    // Retreives all books from db and returns it.
    static async getBooks() {
        try {
            return await books.find({});
        }
        catch (e) {
            console.error(e);
        } 
    }


    static async getBookById(bookId) {
        try {
            return await books.find({ _id: ObjectId(bookId)});
        }
        catch (e) {
            console.error(e);
        }
    }

    // Adds book to db and returns a response from db.
    static async addBook(book) {
        try {
           return await books.insertOne(book);
        }
        catch (e) {
            console.error(e);
        }
    }

    // Removes book from db and returns a response from db.
    static async removeBook(bookId) {
        try {
            return await books.deleteOne({ _id: ObjectId(bookId) });  
        }
        catch (e) {
            console.error(e);
        }
    }

    // Updates book in db and returns a response from db. 
    static async updateBook(book) {
        try {
           return await books.replaceOne({ _id: ObjectId(bookId) }, book);
        }
        catch (e) {
            console.error(e);
        }
    }
}