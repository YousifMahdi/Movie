import React, { useState } from 'react';
import Logo from './components/Logo';
import BackgroundImage from './components/BackgroundImage';
import SearchBar from './components/searchBar';
import './styles.css'; 
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (searchTerm) => {
    const apiKey = '1992880a4cc3a11d89181567ff857552';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSearchResults(data.results);
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="App">
      <nav className="App-nav">
        <Logo />
      </nav>
      <header className='App-header'>
        <BackgroundImage />
        <SearchBar onSearch={handleSearch} />
        <div className='movie-grid'>
          {searchResults.map((movie) => (
            <div key = {movie.id} className='movie-card'>
              <img src= {`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
