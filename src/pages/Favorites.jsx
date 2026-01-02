import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";
import { getFavoriteMovies } from "../handlers/movieHandlers";

function Favorites({ movies, toggleFavorite }) {
  const favoriteMovies = getFavoriteMovies(movies);
  const isAdminPanel = false;
  
  if (favoriteMovies.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorite Movies</h2>
      <div className="movies-grid">
        {favoriteMovies.map((movie) => (
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

export default Favorites;
