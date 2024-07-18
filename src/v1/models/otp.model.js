const {Schema, model} = require('mongoose');

const COLLECTION_NAME = 'otp';

const otpSchema = new Schema({
  email: String,
  otp: String,
  create:{ type: Date, default: Date.now, index: {expires: 20}}
}, {
  collection: COLLECTION_NAME
})

module.exports = model(COLLECTION_NAME, otpSchema);