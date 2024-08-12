const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  status: { type: String, enum: ['available', 'unavailable'], default: 'available' },
});

module.exports = mongoose.model('Book', BookSchema);
