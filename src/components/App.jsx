import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { NavLink, Routes, Route } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
// import fetchFilms from 'service/api';

export const App = () => {
  // fetchFilms();
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:moviesId/*" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};
