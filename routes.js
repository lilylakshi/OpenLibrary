/**
 * Central hub for all routes within the server
 * This has been registered in server.js
 */

'use strict';

var express = require('express');
var router = express.Router();

// Books related APIs
var booksApi = require('./apis/bookRoutes.js');
router.use('/books', booksApi);

// Users related APIs
var usersApi = require('./apis/userRoutes.js');
router.use('/users', usersApi);

module.exports = router;