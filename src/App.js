import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard'

//7fe41261
const API_URL = 'http://www.omdbapi.com?apikey=7fe41261'

const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}

function App() {

  const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`)
    console.log(response.data.Search)

  }

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="app">
      <h1>MovieCity</h1>

      <div className="search">
        <input
          placeholder="Search for movies!"
          value="Superman"
          onChange={() => { }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => { }}
        />
      </div>

      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}

export default App;
