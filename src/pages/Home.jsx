import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
import { filterMoviesBySearch } from "../handlers/movieHandlers";

function Home({ movies, toggleFavorite }) {
  const [searchQuery, setSearchQuery] = useState("");
  const isAdminPanel = false;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Filter movies based on search query
  const filteredMovies = filterMoviesBySearch(movies, searchQuery);

  return (
    <div className="home">
      <form onSubmit={handleFormSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies ..."
          className="search-input"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleFavorite={toggleFavorite}
            isAdminPanel={isAdminPanel}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
