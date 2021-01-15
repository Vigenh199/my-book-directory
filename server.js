const app = require('./app');
const { MongoClient } = require('mongodb');
const Book = require('./models/book.model');


MongoClient.connect(
    'mongodb://Vigenh199:vigenh199@localhost:27017/?authSource=my_apps',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
 .then(async (client) => {
    await Book.injectDB(client);

    app.listen(5000, () => {
        console.log("listening on port: 5000");
    })
 })
 .catch(err => {
    console.error(err.stack);
    process.exit(1);
 });