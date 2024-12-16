const http = require('http');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.status(200).send('Ya lublu shavel\n');
});
module.exports = app;