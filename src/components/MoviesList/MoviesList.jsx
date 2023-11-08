const MovieList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, title, overview, poster_path }) => (
        <li key={id}>
          <img
            src={
              poster_path
                ? `http://image.tmdb.org/t/p/w154${poster_path}`
                : `https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg`
            }
            alt={title}
            width="154"
            height="231"
          />
          <div>
            <h3>{title}</h3>
            <p>{overview}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
