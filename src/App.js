import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Navigation from './components/Navigation';

function App() {
  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

  const [movies, setMovies] = useState([]);

  const updateQuery = (text) => {
    fetch(SEARCH_API + text)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, [FEATURED_API]);

  return (
    <div className="movie-container">
      <Navigation updateSearchQuery={updateQuery} />
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
