import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <>
      <h3>MovieDetails page</h3>
      <Link to={`/cast`}>Cast</Link>
      {/* <MovieDetails /> */}
    </>
  );
};
export default MovieDetails;
