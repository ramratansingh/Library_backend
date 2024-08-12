const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Get user's transaction history
router.get('/:userId/transactions', async (req, res) => {
  const transactions = await Transaction.find({ user: req.params.userId }).populate('book');
  res.json(transactions);
});

module.exports = router;
