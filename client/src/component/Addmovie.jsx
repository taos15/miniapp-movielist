import axios from 'axios';
import { useEffect, useState } from 'react';

export const Addmovie = () => {
  const [useInput, setUserinput] = useState('');

  const addMovie = (e) => {
    if (useInput !== '') {
      axios.post(
        'http://localhost:8080/api/v1/movies',
        { title: useInput },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setUserinput('');
    }
  };

  return (
    <div>
      <input
        value={useInput} // ...force the input's value to match the state variable...
        onChange={(e) => setUserinput(e.target.value)} // ... and update the state variable on any edits!
      />
      <button onClick={(e) => addMovie(e)}>Add movie</button>
    </div>
  );
};
