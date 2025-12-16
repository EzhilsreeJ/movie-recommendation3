import React, { useState } from 'react';
import './AdminForm.css'; // Assuming you'll create an AdminForm.css file

function AdminForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), // Simple unique ID generation for now
      title,
      genre,
      year: parseInt(year, 10), // Ensure year is a number
      description,
      imageUrl,
    };
    onSubmit(newMovie);

    // Clear form after submission
    setTitle('');
    setGenre('');
    setYear('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="admin-form-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Movie</button>
      </form>
    </div>
  );
}

export default AdminForm;