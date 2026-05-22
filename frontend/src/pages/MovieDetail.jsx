import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Loader from "../components/Loader";

import ErrorMessage from "../components/ErrorMessage";

import { getMovieById } from "../services/movieService";

import { Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);

        setMovie(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);

    const mins = minutes % 60;

    return `${hrs}h ${mins}m`;
  };

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div className="detail">

      <h1>{movie.title}</h1>

      <p>Director: {movie.director}</p>

      <p>Genre: {movie.genre}</p>

      <p>Year: {movie.year}</p>

      <p>Rating: {movie.rating}</p>

      <p>
        Duration:
        {" "}
        {formatDuration(movie.duration)}
      </p>

      <p>Language: {movie.language}</p>

      <Link to={`/book/${movie._id}`}>
        <button>Book Tickets</button>
      </Link>

    </div>
  );
}

export default MovieDetail;