'use strict';

const {
  _cart,
  _product,
  _inventory,
  _order
} = require('../models/ecommerce.model');

var that = module.exports = {
  addProduct: async (product) => {
    return await _product.create(product);
  },

  addInventory: async (inventory) => {
    return await _inventory.create(inventory);
  },

  addToCart: async ({productId, quantity, userId}) => {
    /**
     * Step 1: Kiem tra trong kho co du hang hay khong?
     * Step 2: add to cart
    */ 
    const stock = await _inventory.updateOne({
      productId,
      quantity: {
        $gt: quantity
      }}, {
        $inc: {quantity: -quantity},
        $push: {
          reservations: {
            userId,
            quantity,
            productId
          }
        }
      }
    )
    console.log('add stock::', stock);
    if (stock.modifiedCount) {
      // add to cart
      const addToCart = await _cart.findOneAndUpdate(
          {userId},
          {$push: 
            { products: { productId, quantity} }
          }, 
          {upsert: true, new: true}
        )

        console.log('add to cart::', addToCart);
    }
    return 1;
  }
}