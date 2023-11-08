import axios from 'axios';
import { Notify } from 'notiflix';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontSize: '24px',
};

const KEY = 'd753e7a843a028100c153fd380dbecd0';
const URL = 'https://api.themoviedb.org/3';

async function fetchMovies(endPoint) {
  //    --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'

  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios(url);
  return response.data;
}
export default fetchMovies;

export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    paramsForNotify
  );
}
