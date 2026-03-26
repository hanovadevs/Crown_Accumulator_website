const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL or placeholder path
    default: 'https://via.placeholder.com/300?text=SOLO+Product'
  },
  brand: {
    type: String,
    default: 'SOLO'
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
