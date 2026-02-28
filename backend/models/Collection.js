const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
  houseNumber: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Collected'], default: 'Pending' },
  wardenName: String,
  wasteType: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Collection', CollectionSchema);