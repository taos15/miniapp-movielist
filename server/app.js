const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const movieList = require('./knex/controllers');
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/api/v1/movies', async (req, res) => {
  try {
    const movies = await movieList();
    res.status(200).send(JSON.stringify(movies));
  } catch (err) {
    console.log(err);
  }
});
module.exports = app;
