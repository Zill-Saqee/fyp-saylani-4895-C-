const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Product = new Schema({
    id: {
      type: Number
    },
    title: {
      type: String
    },
    img: {
      type: String
    },
    company: {
        type: String
    },
    info: {
        type: String
    },
    price: {
      type: Number
    },
    count: {
      type: Number
    },
    total: {
      type: Number
    },
    inCart: {
        type: Boolean
    }
  },{
      collection: 'Product'
  });
  
  module.exports = mongoose.model('Product', Product);