import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getMovies = async () => {
  const response = await axios.get(`${API}/movies`);
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`${API}/movies/${id}`);
  return response.data;
};

export const getMoviesByGenre = async (genre) => {
  const response = await axios.get(
    `${API}/movies/genre/${genre}`
  );

  return response.data;
};

export const addMovie = async (movie) => {
  const response = await axios.post(
    `${API}/movies`,
    movie
  );

  return response.data;
};