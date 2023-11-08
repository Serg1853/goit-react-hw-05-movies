import MovieList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import fetchMovies, { onFetchError } from 'service/api';

const endPoint = '/trending/movie/day';
const Home = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onFetchError);
  }, [films]);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList films={films} />
    </div>
  );
};
export default Home;
