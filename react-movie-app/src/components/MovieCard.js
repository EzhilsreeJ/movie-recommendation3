import React from 'react';
import './MovieCard.css'; // Assuming you'll create a MovieCard.css file

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-description">{movie.description}</p>
      </div>
    </div>
  );
}

export default MovieCard;