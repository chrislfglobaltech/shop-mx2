const {Schema, model} = require('mongoose');

const COLLECTION_NAME = 'users';

const userSchema = new Schema({
  userId:  Number,
  email: String,
  username: String,
}, {
  collection: COLLECTION_NAME,
  timestamps: true,
})

// Statics vs methods vs virtual vs middleware
userSchema.virtual('getTime').get(() => {
  return Date.now();
})

userSchema.statics.getStatics = () => {
  return 'get Statics';
};

userSchema.methods.getMethods = function() {
  return `get getMethods ${this.getTime}`;
};

// middleware
userSchema.pre('save', function(next) {
  // this refers to the current document being saved
  this.username = this.username.toLowerCase();
  next();
});

module.exports = model(COLLECTION_NAME, userSchema);