import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './HomePage.css'; // Assuming you'll create a HomePage.css file

function HomePage() {
  const [movies, setMovies] = useState([]);

  // Dummy movie data for demonstration
  const dummyMovies = [
    {
      id: 1,
      title: 'Inception',
      genre: 'Sci-Fi, Thriller',
      year: 2010,
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7adVOyIoKHjd9f2pQ5Srx0N0.jpg'
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      year: 1994,
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/q6y0Go160O5qWd2X0eZkYh7n9V.jpg'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      year: 2008,
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/qCbG7dyN50f93yWvUf9v5oE0YyC.jpg'
    },
    {
      id: 4,
      title: 'Pulp Fiction',
      genre: 'Crime, Drama',
      year: 1994,
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/d5iIlsuVzkIPd7I02gI0h0l99jI.jpg'
    }
  ];

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    setMovies(dummyMovies);
  }, []);

  return (
    <div className="home-page">
      <h1>Recommended Movies</h1>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found. Please check back later or try adding some via the admin page!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;