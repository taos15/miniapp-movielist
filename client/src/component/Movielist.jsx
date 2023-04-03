import axios from 'axios';
import { useEffect, useState } from 'react';

export function Movielist() {
  const [apiMovies, setApiMovies] = useState(null);
  const [useInput, setUserinput] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const moviesFetch = async () => {
    const res = await axios.get('http://localhost:8080/api/v1/movies');
    const data = await res.data;
    setApiMovies(data);
    return data;
  };
  useEffect(() => {
    moviesFetch();
    search();
  }, []);

  // Search list filter
  const search = () => {
    setSearchInput(useInput);
  };

  let filteredMovie = apiMovies?.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput)
  );

  const newAPIMovies = filteredMovie?.map((movie, index) => {
    const movieName = movie.title;

    return <li key={index}>{movieName}</li>;
  });

  // component return
  return (
    <div>
      <div>
        <input
          value={useInput} // ...force the input's value to match the state variable...
          onChange={(e) => setUserinput(e.target.value)} // ... and update the state variable on any edits!
        />
        <button onClick={() => search()}>Search</button>
      </div>
      {<ul>{newAPIMovies}</ul>}
    </div>
  );
}
