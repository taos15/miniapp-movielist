const knex = require('./dbConnection');

const movieList = () => {
  return knex.select().from('movies');
};
const postMovies = (movie) => {
  return knex('movies').insert(movie);
};

module.exports = { movieList, postMovies };
