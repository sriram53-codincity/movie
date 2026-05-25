import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>MovieVault</h2>

      <div className="nav-links">
        <Link to="/">Movies</Link>

        <Link to="/add-movie">
          Add Movie
        </Link>

        <Link to="/bookings">
          Bookings
        </Link>
      </div>
    </div>
  );
}

export default Navbar;