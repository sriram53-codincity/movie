import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import AddMovie from "./pages/AddMovie";
import BookMovie from "./pages/BookMovie";
import Bookings from "./pages/Bookings";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Movies />} />

        <Route
          path="/movies/:id"
          element={<MovieDetail />}
        />

        <Route
          path="/add-movie"
          element={<AddMovie />}
        />

        <Route
          path="/book/:id"
          element={<BookMovie />}
        />

        <Route
          path="/bookings"
          element={<Bookings />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;