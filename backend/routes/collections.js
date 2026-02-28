const express = require('express');
const router = express.Router();
const Collection = require('../models/collection');

// @route   GET /api/collections
// @desc    Get all waste collection records
router.get('/', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   PATCH /api/collections/:id
// @desc    Update collection status (Collected/Pending)
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedRecord = await Collection.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedRecord);
  } catch (err) {
    res.status(400).json({ message: 'Update failed' });
  }
});

// @route   POST /api/collections
// @desc    Create a new waste collection request
router.post('/', async (req, res) => {
  try {
    const newCollection = new Collection({
      house: req.body.house,
      warden: req.body.warden,
      mobile: req.body.mobile,
      address: req.body.address,
      type: req.body.type,
      status: 'Pending', // Default status for new requests
      payId: `TXN${Math.floor(Math.random() * 1000)}`, // Temporary ID generator
      date: new Date().toLocaleDateString('en-GB', { day: '2d', month: '2d' })
    });

    const savedData = await newCollection.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ message: "Server Error: Could not save data" });
  }
});
module.exports = router;