import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log('movieId', movieId);
  return <>MovieDetails</>;
};
export default MovieDetails;
