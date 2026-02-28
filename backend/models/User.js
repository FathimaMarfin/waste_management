const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  houseNumber: { type: String, required: true, unique: true },
  municipality: { type: String, required: true },
  password: { type: String, required: true }, 
  role: { type: String, default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);