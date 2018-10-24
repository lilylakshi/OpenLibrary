/**
 * All books related routes are defined and attached to express.Router() instance
 */
'use strict';

var fs = require('fs');
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Get all books
router.get('/', (req, res) => {
  fs.readFile('data/books.json', (err, data) => {
    res.json(JSON.parse(data));
  });
});

// Get a single book
router.get('/:id', (req, res) => {
  res.json({name: 'Some book'});
});

// Add a book
router.post('/', (req, res) => {
  fs.readFile('data/books.json', (readErr, data) => {
    var books = JSON.parse(data);
    books.push(req.body);
    fs.writeFile('data/books.json', JSON.stringify(books, null, 2), (writeErr) => {
      if(writeErr) {
        // return error
        res.json({"status": "error"});
      }
      res.json(req.body);
    });
  });
});

// Update a book
router.put('/', (req, res) => {
  res.json({name: 'book updated'});
});

//export this router to use in our routes.js
module.exports = router;