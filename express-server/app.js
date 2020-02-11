/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// server settings
const app = express().use('*', cors());
const port = process.env.PORT || 4000;

// app settings
const cakeRouter = require('./routes/index.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', cakeRouter);

app.server = app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});

module.exports = app;
