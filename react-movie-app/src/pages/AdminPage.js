import React, { useState } from 'react';
import AdminForm from '../components/AdminForm';
import './AdminPage.css'; // Assuming you'll create an AdminPage.css file

function AdminPage() {
  const [movies, setMovies] = useState([]); // State to hold movies added via admin

  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
    alert('Movie added successfully!');
    // In a real app, you'd likely send this to a backend API here
  };

  return (
    <div className="admin-page-container">
      <h1>Admin Panel</h1>
      <p>Use this panel to add new movies to the recommendation system.</p>
      <AdminForm onSubmit={handleAddMovie} />

      {/* Optionally display added movies */}
      <div className="added-movies-section">
        <h2>Movies Added</h2>
        {movies.length > 0 ? (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <strong>{movie.title}</strong> ({movie.year}) - {movie.genre}
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies have been added yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdminPage;