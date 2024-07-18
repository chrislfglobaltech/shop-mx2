'use strict';

// Models
const _User = require('../models/user.model');

// Services

// Utils
var that = module.exports = {
  getStatics: async () => {
    return _User.getStatics();
  },

  getMethods: async () => {
    const __User = new _User();
    return _User.getMethods();
  },

  createUser: async ({email, username, userId}) => {
    const user = new _User({email, username, userId});
    return await user.save();
  },

}