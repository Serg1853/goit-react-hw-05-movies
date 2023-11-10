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

export async function fetchMovies(endPoint) {
  //    --url 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=API_KEY'

  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchSearchMovies(endPoint, query) {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieCast(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieReviews(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}
export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    paramsForNotify
  );
}
