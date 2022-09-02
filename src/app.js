const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const router = require('./routes/web.js')(app);
const mongoose = require('./database/connectivity')
app.use(express.json());
app.use(cors());

// const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');

if (process.env.NODE_ENV === 'development') {
  app.use(express.static('client/public'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

app.use(notFound);
app.use(errorHandler);

module.exports = app;