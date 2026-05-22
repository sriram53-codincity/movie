import axios from "axios";

const API = "http://127.0.0.1:8000";

export const createBooking = async (data) => {
  const response = await axios.post(
    `${API}/bookings`,
    data
  );

  return response.data;
};

export const getBookings = async () => {
  const response = await axios.get(
    `${API}/bookings`
  );

  return response.data;
};