// This is the user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Course
var User = new Schema({
  fName: {
    type: String
  },
  lName: {
    type: String
  },
  email: {
    type: String
  },
  contactNo: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);
