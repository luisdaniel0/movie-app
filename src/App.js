import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

//7fe41261
const API_URL = 'http://www.omdbapi.com?apikey=7fe41261'


function App() {

  const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`)
    console.log(response.data.Search)

  }


  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
