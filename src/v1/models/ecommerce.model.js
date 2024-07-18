const {Schema, model} = require('mongoose');

// Product model
const productSchema = new Schema({
  productId: {type: Number, required: true},
  "code": String,
  "name": String,
  "brand": String,
  "description": String,
  "release_date": Date,
  "specs": {type: Array, default: []}
}, {
  collection: "products",
  timestamps: true,
})

// Cart model
const cartSchema = new Schema({
  userId: String,
  // cardId: Number,
  status: {type: String, default: 'active'},
  modifiedOn: {type: Date, default: Date.now},
  products: Array,
}, {
  collection: "carts",
  timestamps: true,
})

// Order model
const orderSchema = new Schema({
  // cardId: Number,
  orderId: Number,
  userId: String,
  shipping: Object,
  payment: Object,
  products: Array,
}, {
  collection: "orders",
  timestamps: true,
})

// Inventories model
const inventorySchema = new Schema({
  productId: Number,
  quantity: Number,
  reservations: Array,
}, {
  collection: "inventories",
  timestamps: true,
})

module.exports = {
  _product: model('products', productSchema),
  _order: model('orders', orderSchema),
  _cart: model('carts', cartSchema),
  _inventory: model('inventories', inventorySchema),
}