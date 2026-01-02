// Movie operation handlers
// These functions handle all movie-related state operations

/**
 * Toggles the favorite status of a movie
 * @param {Array} movies - Current movies array
 * @param {number} movieId - ID of the movie to toggle
 * @returns {Array} - Updated movies array
 */
export const handleToggleFavorite = (movies, movieId) => {
  return movies.map(movie => 
    movie.id === movieId 
      ? { ...movie, isFavorite: !movie.isFavorite }
      : movie
  );
};

/**
 * Removes a movie from the movies array
 * @param {Array} movies - Current movies array
 * @param {number} movieId - ID of the movie to remove
 * @returns {Array} - Updated movies array without the removed movie
 */
export const handleRemoveMovie = (movies, movieId) => {
  return movies.filter(movie => movie.id !== movieId);
};

/**
 * Adds a new movie to the movies array
 * @param {Array} movies - Current movies array
 * @param {Object} newMovieData - Object containing title, releaseDate, url
 * @returns {Array} - Updated movies array with the new movie
 */
export const handleAddMovie = (movies, newMovieData) => {
  // Generate unique ID (get the highest current ID and add 1)
  const newId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) + 1 : 1;
  
  const newMovie = {
    id: newId,
    title: newMovieData.title,
    releaseDate: newMovieData.releaseDate,
    url: newMovieData.url,
    isFavorite: false
  };

  return [...movies, newMovie];
};

/**
 * Validates movie data before adding
 * @param {Object} movieData - Object containing title, releaseDate, url
 * @returns {Object} - { isValid: boolean, errors: Array }
 */
export const validateMovieData = (movieData) => {
  const errors = [];
  
  if (!movieData.title || movieData.title.trim() === '') {
    errors.push('Title is required');
  }
  
  if (!movieData.releaseDate || movieData.releaseDate.trim() === '') {
    errors.push('Release date is required');
  }
  
  if (!movieData.url || movieData.url.trim() === '') {
    errors.push('Image URL is required');
  }
  
  // Basic URL validation
  if (movieData.url && !movieData.url.startsWith('http')) {
    errors.push('Image URL must be a valid URL starting with http or https');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Filters movies based on search query
 * @param {Array} movies - Movies array to filter
 * @param {string} searchQuery - Search term
 * @returns {Array} - Filtered movies array
 */
export const filterMoviesBySearch = (movies, searchQuery) => {
  if (!searchQuery || searchQuery.trim() === '') {
    return movies;
  }
  
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

/**
 * Gets only favorite movies
 * @param {Array} movies - Movies array to filter
 * @returns {Array} - Array of favorite movies only
 */
export const getFavoriteMovies = (movies) => {
  return movies.filter(movie => movie.isFavorite);
};