const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
});

AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Admin', AdminSchema);
