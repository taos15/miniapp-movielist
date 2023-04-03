const knex = require('./dbConnection');

const movieList = () => {
  return knex.select().from('movies');
};

module.exports = movieList;
