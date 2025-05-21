require('dotenv').config();
const { connect } = require('nats');
const cron = require('node-cron');

async function startPublisher() {
  const nc = await connect({ servers: process.env.NATS_URL });

  cron.schedule('*/15 * * * *', () => {
    nc.publish('crypto.update', JSON.stringify({ trigger: 'update' }));
    console.log('Published update event');
  });
}

console.log('Starting NATS publisher...');
startPublisher()
  .then(() => console.log('NATS publisher started'))
  .catch(err => console.error('Error starting NATS publisher:', err)); 