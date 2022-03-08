require("dotenv").config();
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const cors = require('cors')
const path = require('path');

// This library allows us to eliminate the use of try-catch blocks and next(exception) calls.
// If an exception occurs in an async route, the execution is automatically passed to the error handling middleware.
require('express-async-errors')

// Import express library to handle http rather than using Node's built-in http web server.
// We import express, which is a function used to create an express application stored in the app variable.
const express = require('express')
const app = express();

// Use Mongoose, object document mapper, library instead of MongoDB's Node.js driver library.
// Allows us to handle JS objects as Mongo documents easily.
const mongoose = require('mongoose');

// Connect to mongodb.
// MongoDB Node.js driver rewrote some tools and put these behind flags so we need to turn these options on to avoid deprecation warnings.
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log(`Error connecting to MongoDB: ${error.message}`)
    })

// Node's cors middleware, allows requests from other origins than our server
app.use(cors())

// Use express json-parser middleware that parses incoming requests with JSON payloads.
// The json-parser takes the JSON data of a request, transforms it into a JS object and attaches it to the body of the request object before the route handler is called.
app.use(express.json())
// Handles encoded parameters in the URL
app.use(express.urlencoded({ extended: true }))

// Static is express's built-in middleware. 
// When express gets an HTTP GET request, it will check if the build directory contains a file corresponding to the request's address, if found, express will return the frontend, otherwise it will handle it using the backend code.
// app.use(express.static('build'))

app.use(middleware.requestLogger)

// Enable routing
require('./router')(app);
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app