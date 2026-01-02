import React from "react";
import "../css/MovieCard.css";

function MovieCard({ movie, toggleFavorite , isAdminPanel, removeMovie }) {
  const onFavorite = () => {
    toggleFavorite(movie.id);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img className="movie-image" src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          {!isAdminPanel&&(<button 
            className={`favorite-btn ${movie.isFavorite ? 'favorited' : ''}`} 
            onClick={onFavorite}
          >
            {movie.isFavorite ? '❤️' : '❤︎'}
          </button>)}
          {isAdminPanel&&(<button 
            className='delete-button'
            onClick={() => removeMovie(movie.id)}
          >
            Remove
          </button>)}
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieCard;
