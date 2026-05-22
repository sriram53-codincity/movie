import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getMovieById } from "../services/movieService";

import { createBooking } from "../services/bookingService";

function BookMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [form, setForm] = useState({
    username: "",
    totalTickets: "",
  });

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await getMovieById(id);

    setMovie(data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      username: form.username,
      totalTickets: form.totalTickets,
      movieName: movie.title,
    };

    await createBooking(bookingData);

    alert("Booking Success");
  };

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>Book Movie</h1>

      <h2>{movie.title}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />

        <input
          type="number"
          name="totalTickets"
          placeholder="Total Tickets"
          onChange={handleChange}
        />

        <button type="submit">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookMovie;