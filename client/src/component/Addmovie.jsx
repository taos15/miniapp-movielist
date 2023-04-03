import axios from 'axios';
import { useEffect, useState } from 'react';

const Addmovie = () => {
  const [useInput, setUserinput] = useState('');

  const addMovie = () => {
    axios.post(
      'http://localhost:8080/api/v1/movies',
      { title: useInput },
      { headers: { 'Content-Type': 'aplication/json' } }
    );
  };

  return (
    <div>
      <input
        value={useInput} // ...force the input's value to match the state variable...
        onChange={(e) => setUserinput(e.target.value)} // ... and update the state variable on any edits!
      />
      <button onClick={() => addMovie()}>Search</button>
    </div>
  );
};
