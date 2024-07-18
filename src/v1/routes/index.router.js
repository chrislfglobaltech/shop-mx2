const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/user.controller');
const {addInventory, addProduct, addToCart} = require('../controllers/ecommerce.controller');

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success api',
        message: 'api ok',
        metadata: [
            {
                name: 'anonystick',
                age: 40
            },
            {
                name: 'Ronaldo',
                age: 39
            },
            {
                name: 'Messi',
                age: 37
            }
        ]
    })
})

router.post('/v1/services/users', createUser);

// ecommerce
router.put('/v1/ecommerce/products', addProduct);
router.put('/v1/ecommerce/inventories', addInventory);
router.put('/v1/ecommerce/addToCart', addToCart);


module.exports = router;