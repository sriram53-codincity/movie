import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import {
  getMovies,
  getMoviesByGenre,
} from "../services/movieService";

function Movies() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      setLoading(true);

      const data = await getMovies();

      setMovies(data);

      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const filterGenre = async (genre) => {
    try {
      setLoading(true);

      const data = await getMoviesByGenre(genre);

      setMovies(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div className="container">
      <h1>MovieVault</h1>

      <div className="buttons">
        <button onClick={fetchMovies}>All</button>

        <button onClick={() => filterGenre("Sci-Fi")}>
          Sci-Fi
        </button>

        <button onClick={() => filterGenre("Action")}>
          Action
        </button>

        <button onClick={() => filterGenre("Drama")}>
          Drama
        </button>

        <button onClick={() => filterGenre("Comedy")}>
          Comedy
        </button>

        <button onClick={() => filterGenre("RomCom")}>
          RomCom
        </button>
      </div>

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;