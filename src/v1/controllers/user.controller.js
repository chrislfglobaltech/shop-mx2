'use strict';

// Services
const {getMethods, getStatics, createUser} = require('../services/user.service');

var that = module.exports = {
  createUser: async (req, res, next) => {
    try {
      const {email, username, userId} = req.body;
      res.json( {
        message: 'User created successfully',
        elements: await createUser({email, username, userId})
      })
    } catch (error) {
      console.error(error);
    }
  },

  getMethods: async (req, res, next) => {
    try {
      res.json( {
        message: await getMethods()
      })
      return getMethods();
    } catch (error) {
      console.error(error);
    }
  },

  getStatics: async (req, res, next) => {
    try {
      res.json( {
        message: await getMethods()
      })
      return getStatics();
    } catch (error) {
      console.error(error);
    }
  },
}