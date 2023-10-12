const express = require('express');
const router = express.Router();
const Data = require('./models'); // Import the Data model

// GET route to retrieve data (adjust route and query as needed)
router.get('/', async (req, res) => {
  try {
    const uniqueRegions = await Data.distinct('Region');
    res.json(uniqueRegions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;