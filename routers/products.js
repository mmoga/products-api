const express = require('express');
const router = express.Router();
const mockProducts = require('../mocks/products');

const Product = require('../models/product');

const productArrToObj = (arrayOfProducts) => {
    // create an accumulator object
const accumulator = {};
    // for each product in array of products
arrayOfProducts.forEach(product => {
    const id = product._id;
    const copy = {...product}
    delete copy._id;
    accumulator[id] = copy;
});
        // grab the id
        // delete the _id internal to the object
        // set the id value in the accumulator object equal to product
    // return accumulator
    return accumulator;
}

router.get('/products', (req, res) => {
    res.status(200).json({
        products: productArrToObj(mockProducts)
    });
});

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const productsObject = productArrToObj(mockProducts); // this will be deleted
    const selectedProduct = productsObject[id];
    res.status(200).json({
        products: {
            [id]: selectedProduct
        }
    });
});

// post means "create"
router.post('/products', (req,res) => {
    const product = new Product({
        name: 'something',
        price: 1000,
        imgSrc: 'https://via.placeholder.com/250x250'
    });
    product.save()
        .then(response => {
            res.status(201).json({
                msg: 'Successfully created product'
            });
        })
        .catch(err => {
            res.status(500).json({
                msg: "There was an error :-/"
            });
        });
});

module.exports = router; // like export default in React