const express = require('express');
const serverApp = express();

const PORT = process.env.PORT || 5000; // necessary for Heroku deployment

serverApp.get('/', (req, res) => {
    res.send('Hello! I work! Yayyy!');
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});