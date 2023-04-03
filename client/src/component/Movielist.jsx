export function Movielist() {
  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];

  const newMovies = movies.map((movie, index) => {
    const movieName = movie.title

    return <div key={index}>{movieName}</div>

  })

  return (
  <>
  {newMovies}
  </>
  );
}
