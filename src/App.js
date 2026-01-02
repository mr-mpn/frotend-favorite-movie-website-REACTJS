import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import {Routes , Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import moviesList from './data/moviesList'
import Admin from "./pages/Admin";
import { useMovies } from './handlers/useMovies';

function App() {
  // Use the custom hook for movie state management
  const { movies, toggleFavorite, removeMovie, addMovie } = useMovies(moviesList);

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home movies={movies} toggleFavorite={toggleFavorite} />} />
          <Route path="/favorites" element={<Favorites movies={movies} toggleFavorite={toggleFavorite} />} />
          <Route path="/admin" element={<Admin movies={movies} toggleFavorite={toggleFavorite} removeMovie={removeMovie} addMovie={addMovie} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


