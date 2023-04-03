const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('tiny'));
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

module.exports = app;