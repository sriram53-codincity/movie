import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hrs}h ${mins}m`;
  };

  return (
    <div
      className="card"
      onClick={() => navigate(`/movies/${movie._id}`)}
    >
      <h2>{movie.title}</h2>

      <p>Director: {movie.director}</p>

      <p>Genre: {movie.genre}</p>

      <p>Year: {movie.year}</p>

      <p>Rating: {movie.rating}</p>

      <p>Duration: {formatDuration(movie.duration)}</p>
    </div>
  );
}

export default MovieCard;