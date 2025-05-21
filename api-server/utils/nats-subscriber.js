const {connect} = require('nats');
const storeCryptoStats = require('./storeCryptoStats');

async function subscribeToNats() {
    const nc = await connect({ servers: process.env.NATS_URL });    
    console.log('Connected to NATS server');
    const sub = nc.subscribe('crypto.update');
    for await (const msg of sub) {
        console.log('Received update trigger');
        await storeCryptoStats();
    }
}

module.exports = subscribeToNats;

