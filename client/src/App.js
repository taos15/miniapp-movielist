import './App.css';
import { Movielist } from './component/Movielist';
import { Addmovie } from './component/Addmovie';

function App() {
  return <div className="App">
    <Movielist />
    <Addmovie />
  </div>;
}

export default App;
