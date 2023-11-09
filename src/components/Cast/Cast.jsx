import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, onFetchError } from 'service/api';
import { Loader } from 'components/Loader/Loader';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onFetchError)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <h3>Cast:</h3>
      {loading && <Loader />}
      {cast.length !== 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
                }
                alt={name}
                width="100"
                height="150"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any information about cast</p>
      )}
    </>
  );
};
export default Cast;
