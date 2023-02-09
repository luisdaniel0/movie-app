import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard'

//7fe41261
const API_URL = 'http://www.omdbapi.com?apikey=7fe41261'



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`)
    setMovies(response.data.Search)

  };

  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="app">
      <h1>MovieCity</h1>

      <div className="search">
        <input
          placeholder="Search for movies!"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
