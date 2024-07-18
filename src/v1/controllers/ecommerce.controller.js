'use strict';

const {addProduct, addInventory, addToCart} = require('../services/ecommerce.service');

var that = module.exports = {
  addProduct: async (req, res, next) => {
    try {
      const product = req.body;
      console.log("product added::", req.body);
      res.json( {
        message: 'Product added successfully',
        elements: await addProduct(product)
      });
    } catch (error) {
      next(error);
    }
  },

  addInventory: async (req, res, next) => {
    try {
      const {inventory} = req.body;
      res.json( {
        message: 'Inventory added successfully',
        elements: await addInventory(inventory)
      });
    } catch (error) {
      next(error);
    }
  },

  addToCart: async (req, res, next) => {
    try {
      const {productId, quantity, userId} = req.body;
      res.json( {
        message: 'Cart added successfully',
        elements: await addToCart({productId, quantity, userId})
      });
    } catch (error) {
      next(error);
    }
  }
}