const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const controller = require('./knex/controllers');
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.get('/api/v1/movies', async (req, res) => {
  try {
    const movies = await controller.movieList();
    res.status(200).send(JSON.stringify(movies));
  } catch (err) {
    console.log(err);
  }
});
app.post('/api/v1/movies', async (req, res) => {
  console.log(req.body);
  try {
    await controller.postMovies(req.body);
    res.status(201).send(req.body);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
