const mongoose = require('mongoose');

const cryptoStatSchema = new mongoose.Schema({
  coin: { type: String, required: true },
  price: Number,
  marketCap: Number,
  change24h: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CryptoStat', cryptoStatSchema);