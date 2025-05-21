require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const statsRoute = require('./routes/stateRoutes');
const subscribeToNats = require('./utils/nats-subscriber');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'localhost:3000', // Adjust this to frontend URL
    // origin: 'https://' //Production URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use('/', statsRoute);

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('MongoDB connected');
    subscribeToNats();
    app.listen(3000, () => console.log('API server running on port 3000'));
  })
  .catch(err => {
    console.log('URI:', process.env.DB_URI);
    console.error('MongoDB connection error:', err);
  });