const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI); // must happen after dotenv because we need the URI

const PORT = process.env.PORT || 5000; // necessary for Heroku deployment

// routers
const productRouter = require('./routers/products');

serverApp.use(function logger(req, res, next){
    const { url } = req;
    const date = new Date();
    console.log(`URL: ${url} @ ${date}`);
    next();
});

serverApp.use(productRouter); // register the router with the application

serverApp.get('/', (req, res) => {
    res.send('test');
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});