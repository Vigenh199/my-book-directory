const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const bookRoutes = require('./routes/book.routes');

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bookRoutes);

module.exports = app;