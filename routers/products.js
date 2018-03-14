const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.send('products go here');
});

module.exports = router; // like export default in React