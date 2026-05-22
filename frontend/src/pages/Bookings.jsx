import { useEffect, useState } from "react";

import { getBookings } from "../services/bookingService";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const data = await getBookings();

    setBookings(data);
  };

  return (
    <div className="container">
      <h1>Bookings</h1>

      {bookings.map((booking) => (
        <div
          className="card"
          key={booking._id}
        >
          <h3>{booking.username}</h3>

          <p>Movie: {booking.movieName}</p>

          <p>
            Tickets:
            {" "}
            {booking.totalTickets}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Bookings;