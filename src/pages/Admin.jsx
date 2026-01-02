import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Admin.css";

function Admin({ movies, toggleFavorite, removeMovie, addMovie }) {
  const isAdminPanel = true;
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [url, setUrl] = useState("");

  const HandleAddButton = () => {
    const movieData = { title, releaseDate, url };
    
    const result = addMovie(movieData);
    
    if (result.success) {
      // Clear form on success
      setTitle("");
      setReleaseDate("");
      setUrl("");
    } else {
      // Show validation errors
      alert(`Please fix the following errors:\n${result.errors.join('\n')}`);
    }
  };

  return (
    <div className="admin">
      <div className="admin-form-section">
        <h1>Add New Movies</h1>
        <p>Fill out the form below to add a new movie to the collection</p>
        <form className="admin-form">
          <input
            type="text"
            placeholder="Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Release Date (e.g., 2025)"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button
            type="button"
            className="admin-add-button"
            onClick={HandleAddButton}
          >
            Add Movie
          </button>
        </form>
      </div>

      <div className="list-movies-admin">
        <h1>Movies Collection ({movies.length} movies)</h1>
        <div className="admin-movies-grid">
          {movies.map((m) => {
            return (
              <MovieCard
                movie={m}
                key={m.id}
                toggleFavorite={toggleFavorite}
                isAdminPanel={isAdminPanel}
                removeMovie={removeMovie}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
