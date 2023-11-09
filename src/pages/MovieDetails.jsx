import { Link } from 'react-router-dom';

const MovieDetails = () => {
  // const params = useParams();

  return (
    <>
      <h3>MovieDetails page</h3>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      {/* <MovieDetails /> */}
    </>
  );
};
export default MovieDetails;
