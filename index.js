const express = require('express');
const serverApp = express();
const mongoose = require('mongoose'); // mongoose is like our JS/Mongo translator

require('dotenv').config();

// middleware imports
const logger = require('./middlewares/logger');

mongoose.connect(process.env.MONGO_URI); // must happen after dotenv because we need the URI

const PORT = process.env.PORT || 5000; // necessary for Heroku deployment

// routers
const productRouter = require('./routers/products');

serverApp.use(logger);

serverApp.use(productRouter); // register the router with the application

serverApp.get('/', (req, res) => {
    res.send('test');
});

serverApp.use(function notFoundHandler(req, res, next){
    res.status(404).send('Lions, tigers, and bears—Oh my! Nothing to see here.')
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});