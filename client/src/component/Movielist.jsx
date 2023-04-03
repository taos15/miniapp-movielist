import axios from 'axios';
import { useEffect, useState } from 'react';
export function Movielist() {
  const [apiMovies, setApiMovies] = useState(null);

  const moviesFetch = async () => {
    const res = await axios.get('http://localhost:8080/api/v1/movies');
    const data = await res.data;
    setApiMovies(data);
    return data;
  };
  useEffect(() => {
    moviesFetch();
  }, []);

  const newAPIMovies = apiMovies?.map((movie, index) => {
    const movieName = movie.title;

    return <div key={index}>{movieName}</div>;
  });

  // component return
  return <>{newAPIMovies}</>;
}
