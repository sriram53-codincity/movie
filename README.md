# MovieVault - Movie Booking System

## Project Overview

MovieVault is a beginner-friendly full stack movie booking application built using:

* React JS (Frontend)
* FastAPI (Backend)
* MongoDB Compass (Database)

The project allows:

### Customers

* View movies
* Filter movies by genre
* View movie details
* Book movie tickets
* View bookings

### Theatre Owner

* Add new movies from frontend UI

MongoDB database and collections are automatically created when data is inserted for the first time.

---

# Technologies Used

## Frontend

* React JS
* React Router DOM
* Axios
* CSS

## Backend

* FastAPI
* Python
* PyMongo
* Uvicorn
* Python Dotenv

## Database

* MongoDB Compass

---

# Project Structure

```bash
movie-vault/
│
├── backend/
│   ├── services/
│   │   ├── movie_service.py
│   │   └── booking_service.py
│   │
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Loader.jsx
    │   │   ├── ErrorMessage.jsx
    │   │   └── MovieCard.jsx
    │   │
    │   ├── pages/
    │   │   ├── Movies.jsx
    │   │   ├── MovieDetail.jsx
    │   │   ├── AddMovie.jsx
    │   │   ├── BookMovie.jsx
    │   │   └── Bookings.jsx
    │   │
    │   ├── services/
    │   │   ├── movieService.js
    │   │   └── bookingService.js
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    └── package.json
```

---

# Features

## Customer Features

* Fetch all movies
* Loading spinner while fetching
* Error handling
* Genre filter
* Movie detail page
* Book tickets
* View all bookings

## Theatre Owner Features

* Add movies from UI
* Automatically store in MongoDB

---

# MongoDB Collections

## movies

Stores movie information.

Example:

```json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "genre": "Sci-Fi",
  "year": 2014,
  "rating": 8.6,
  "duration": 169,
  "language": "English"
}
```

---

## bookings

Stores booking information.

Example:

```json
{
  "username": "Sriram",
  "movieName": "Interstellar",
  "totalTickets": 3
}
```

---

# Backend Setup

## Step 1 - Go to Backend

```bash
cd backend
```

---

## Step 2 - Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

---

## Step 3 - Install Packages

```bash
pip install -r requirements.txt
```

---

## Step 4 - Run Backend

```bash
uvicorn app:app --reload
```

Backend URL:

```txt
http://127.0.0.1:8000
```

---

# Frontend Setup

## Step 1 - Go to Frontend

```bash
cd frontend
```

---

## Step 2 - Install Packages

```bash
npm install
```

---

## Step 3 - Run Frontend

```bash
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

---

# Environment Variables

## .env

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=movievault
COLLECTION_NAME=movies
```

---

# API Endpoints

## Movie APIs

### Get All Movies

```http
GET /movies
```

---

### Get Movie By ID

```http
GET /movies/{id}
```

---

### Filter Movies By Genre

```http
GET /movies/genre/{genre}
```

---

### Add Movie

```http
POST /movies
```

Request Body:

```json
{
  "title": "Leo",
  "director": "Lokesh Kanagaraj",
  "genre": "Action",
  "year": 2023,
  "rating": 7.8,
  "duration": 164,
  "language": "Tamil"
}
```

---

## Booking APIs

### Create Booking

```http
POST /bookings
```

Request Body:

```json
{
  "username": "Sriram",
  "movieName": "Interstellar",
  "totalTickets": 3
}
```

---

### Get All Bookings

```http
GET /bookings
```

---

# Frontend Routes

| Route         | Description       |
| ------------- | ----------------- |
| `/`           | View all movies   |
| `/movies/:id` | Movie detail page |
| `/add-movie`  | Add movie page    |
| `/book/:id`   | Book ticket page  |
| `/bookings`   | View all bookings |

---

# Important Concepts Used

## React Concepts

* useState
* useEffect
* useParams
* React Router
* Props
* Conditional Rendering
* Component Reusability

---

## Backend Concepts

* FastAPI Routing
* MongoDB Connection
* CRUD Operations
* Service Layer
* REST APIs

---

# Requirement Checklist

## React Requirements

* useEffect used for API calls
* Loading spinner added
* Error handling added
* `.map()` used with `key`
* Navigation using React Router
* useParams used
* Genre filter implemented
* API calls inside service folder

---

## Additional Features

* Theatre owner movie upload
* Movie booking system
* Booking history page
* MongoDB automatic database creation

---

# Future Improvements

* Authentication
* Admin Login
* Seat Selection
* Payment Gateway
* Search Movies
* Delete Movie
* Update Movie
* Booking Cancellation

---

# Final Result

MovieVault is a complete beginner-friendly movie booking application that demonstrates:

* Full Stack Development
* React Frontend
* FastAPI Backend
* MongoDB Integration
* REST APIs
* Routing
* CRUD Operations
* Booking System
