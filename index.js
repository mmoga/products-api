const express = require('express');
const serverApp = express();
const mongoose = require('mongoose'); // mongoose is like our JS/Mongo translator

require('dotenv').config();

// middleware imports
const bodyParser = require('body-parser');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/404');
const serverError = require('./middlewares/serverError');

mongoose.connect(process.env.MONGO_URI); // must happen after dotenv because we need the URI

const PORT = process.env.PORT || 5000; // necessary for Heroku deployment

// routers
const productRouter = require('./routers/products');
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: true}));
serverApp.use(logger);
serverApp.use(productRouter); // register the router with the application

serverApp.get('/', (req, res) => {
    res.send('test');
});

serverApp.use(notFound);
serverApp.use(serverError);

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});