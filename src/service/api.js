import axios from 'axios';

const KEY = 'd753e7a843a028100c153fd380dbecd0';
const URL = 'https://api.themoviedb.org/3/';

async function fetchFilms() {
  //    --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'

  const url = `${URL}trending/movie/day?language=en-US&api_key=${KEY}`;
  const response = await axios(url);
  return response.data;
}
export default fetchFilms;
