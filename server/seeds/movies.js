/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

const moviesSeed = movies.map((movie, index) => {
  return { title: movie.title };
});

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('movies').del();
  await knex('movies').insert(moviesSeed);
};
