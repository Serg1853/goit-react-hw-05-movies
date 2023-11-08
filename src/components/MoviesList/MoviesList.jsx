import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, overview, poster_path }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : `https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg`
              }
              alt={title}
              //   width="154"
              //   height="231"
            />
            <div>
              <h3>{title}</h3>
              <p>{overview}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
export default MovieList;
