const axios = require('axios');
const CryptoStat = require('../models/CryptoStat');

async function storeCryptoStats() {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true';
  const { data } = await axios.get(url);

  const entries = Object.entries(data).map(([coin, stats]) => ({
    coin,
    price: stats.usd,
    marketCap: stats.usd_market_cap,
    change24h: stats.usd_24h_change,
  }));

  await CryptoStat.insertMany(entries);
  console.log('Crypto stats stored');
}

module.exports = storeCryptoStats;