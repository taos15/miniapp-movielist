const knex = require('./dbConnection');

const movieList = () => {
  return knex.select().from('movies');
};
const postMovies = (movie) => {
  return knex('movies').insert(movie);
};
const deleteMovies = (title) => {
  return knex('movies').where({ title: title }).del();
};

module.exports = { movieList, postMovies, deleteMovies };
