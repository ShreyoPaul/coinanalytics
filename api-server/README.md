# 📡 API Server – Crypto Stats API
This server provides RESTful APIs to serve live cryptocurrency statistics (Bitcoin, Ethereum, Matic) using data from the CoinGecko API. It also subscribes to messages from NATS to store new stats in MongoDB periodically.

---

## 🚀 Features

- Fetches and stores live stats: price, market cap, and 24h change
- REST APIs:
  - `/stats` – Returns latest stats
  - `/deviation` – Returns standard deviation over last 100 entries
- Subscribes to NATS messages to trigger data update
- Uses MongoDB for persistent storage

---

## 📦 Tech Stack

- Node.js + Express.js
- MongoDB with Mongoose
- NATS (for event-driven messaging)
- CoinGecko API

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShreyoPaul/coinanalytics.git
   cd api-server

2.  **Install dependencies**:
    ```bash
    npm install

3.  **Create .env file**:
    ```bash
    MONGODB_URI=mongodb://localhost:27017/crypto-stats
    NATS_URL=nats://localhost:4222


4.  **Run the server**:
    ```bash
    node index.js

## 📬 API Endpoints

- GET /stats?coin=bitcoin
Returns the latest stored statistics for the given coin.

- GET /deviation?coin=bitcoin
Returns the standard deviation of the last 100 price entries.

## 📌 Notes

- Make sure NATS server and MongoDB are running before starting this server.

- This server listens to update messages from the event queue to fetch and store data.
