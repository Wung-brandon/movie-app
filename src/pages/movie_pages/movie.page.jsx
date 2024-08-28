import './movie.page.css';
import SwipeableTextMobileStepper from '../../components/carousel.component';
import Button from '../../components/button.component';
import { useState, useEffect } from 'react';

export default function MoviePage() {
  const [genre, setGenre] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  async function fetchMovieGenre() {
    try {
      const api_key = process.env.REACT_APP_API_KEY;
      const url_end = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
      const res = await fetch(url_end);
      const dataValue = await res.json();
      console.log("genre",dataValue)
      setGenre(dataValue.genres);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMovieGenre();
  }, []);

  const handleGenreClick = async (genreId) => {
    try {
      const api_key = process.env.REACT_APP_API_KEY;
      const url1 = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&with_genres=${genreId}`
      // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreId}`;
      const response = await fetch(url1);
      const data = await response.json();
      console.log("id", genreId)
      console.log("result", data.genres.id)
      setFilteredMovies(data.genres);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="movies-all">
      <SwipeableTextMobileStepper />
      <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Movie page</h1>
      <div className="button-all">
        {genre.map((g) => {
          return (
            <div key={g.id}>
              <p>{g.id}</p>
              <br />
              <Button
                text={g.name}
                className="butts"
                onClick={() => handleGenreClick(g.id)}
              />
              <br />
            </div>
          );
        })}
      </div>

      <div className="movie-list">
        {filteredMovies.map((mov) => (
          <div className="movie-card" key={mov.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
              alt={mov.title}
            />
            <h3>{mov.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}