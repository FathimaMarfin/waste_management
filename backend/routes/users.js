const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signup', async (req, res) => {
  try {
    const { ownerName, houseNumber, municipality, password } = req.body;
    
    // Check if house number is already registered
    let user = await User.findOne({ houseNumber });
    if (user) return res.status(400).json({ msg: 'House already registered' });

    user = new User({ ownerName, houseNumber, municipality, password });
    await user.save();
    
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;