import { Link, useLocation } from 'react-router-dom';
import { LiStyle, UlStyle, WrapCardStyle } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <UlStyle>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <LiStyle>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg'
              }
              alt={title}
              // width="154"
              // height="231"
            />
            <WrapCardStyle>
              <h3>{title}</h3>
              <p>{overview}</p>
            </WrapCardStyle>
          </LiStyle>
        </Link>
      ))}
    </UlStyle>
  );
};
export default MoviesList;
