// Custom hook for managing movie state
import { useState } from 'react';
import { 
  handleToggleFavorite, 
  handleRemoveMovie, 
  handleAddMovie, 
  validateMovieData 
} from './movieHandlers';

/**
 * Custom hook for managing movies state and operations
 * @param {Array} initialMovies - Initial movies data
 * @returns {Object} - Movies state and handler functions
 */
export const useMovies = (initialMovies) => {
  const [movies, setMovies] = useState(initialMovies);

  // Toggle favorite status of a movie
  const toggleFavorite = (movieId) => {
    setMovies(prevMovies => handleToggleFavorite(prevMovies, movieId));
  };

  // Remove a movie from the list
  const removeMovie = (movieId) => {
    setMovies(prevMovies => handleRemoveMovie(prevMovies, movieId));
  };

  // Add a new movie to the list
  const addMovie = (newMovieData) => {
    // Validate the movie data first
    const validation = validateMovieData(newMovieData);
    
    if (!validation.isValid) {
      // Return validation errors instead of adding
      return { success: false, errors: validation.errors };
    }

    setMovies(prevMovies => handleAddMovie(prevMovies, newMovieData));
    return { success: true, errors: [] };
  };

  return {
    movies,
    toggleFavorite,
    removeMovie,
    addMovie,
    setMovies // Keep this for any direct state updates if needed
  };
};