const express = require('express');
const CryptoStat = require('../models/CryptoStat');
const router = express.Router();

router.get('/stats', async (req, res) => {
  const { coin } = req.query;
  const record = await CryptoStat.findOne({ coin }).sort({ timestamp: -1 });
  if (!record) return res.status(404).send({ error: 'Data not found' });

  res.send({
    price: record.price,
    marketCap: record.marketCap,
    '24hChange': record.change24h
  });
});

router.get('/deviation', async (req, res) => {
  const { coin } = req.query;
  const records = await CryptoStat.find({ coin }).sort({ timestamp: -1 }).limit(100);

  const prices = records.map(r => r.price);
  const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
  const stdDev = Math.sqrt(prices.reduce((sum, p) => sum + Math.pow(p - mean, 2), 0) / prices.length);

  res.send({ deviation: +stdDev.toFixed(2) });
});

module.exports = router;