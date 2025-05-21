# ⏱️ Worker Server – Background Job Publisher

This background worker server publishes an `update` event every 15 minutes to a NATS queue. The `api-server` listens to this event to fetch fresh cryptocurrency data.

---

## 🚀 Features

- Publishes an `update` event to NATS every 15 minutes
- Triggers background data collection in `api-server`

---

## 📦 Tech Stack

- Node.js
- NATS (as event queue)
- Node Cron (for scheduled jobs)

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ShreyoPaul/coinanalytics.git
   cd worker-server

2.  **Install dependencies**:
    ```bash
    npm install

2.  **Create .env file**:
    ```bash
    NATS_URL=nats://localhost:4222

4.  **Run the server**:
    ```bash
    node index.js

## 🔁 Job Details

Schedule: Every 15 minutes

## 📌 Notes

- Ensure NATS server is running before starting this server.

- The api-server must be subscribed to handle the update message.
