import { useState } from "react";
import { addMovie } from "../services/movieService";

function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    rating: "",
    duration: "",
    language: "",
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addMovie(movie);

    alert("Movie Added");

    setMovie({
      title: "",
      director: "",
      genre: "",
      year: "",
      rating: "",
      duration: "",
      language: "",
    });
  };

  return (
    <div className="container">
      <h1>Add Movie</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
          
        />

        <input
          name="director"
          placeholder="Director"
          value={movie.director}
          onChange={handleChange}
        />

        <input
          name="genre"
          placeholder="Genre"
          value={movie.genre}
          onChange={handleChange}
        />

        <input
          name="year"
          placeholder="Year"
          value={movie.year}
          onChange={handleChange}
        />

        <input
          name="rating"
          placeholder="Rating"
          value={movie.rating}
          onChange={handleChange}
        />

        <input
          name="duration"
          placeholder="Duration"
          value={movie.duration}
          onChange={handleChange}
        />

        <input
          name="language"
          placeholder="Language"
          value={movie.language}
          onChange={handleChange}
        />

        <button type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
}

export default AddMovie;