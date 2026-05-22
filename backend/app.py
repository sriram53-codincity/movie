from fastapi import FastAPI
from fastapi import Body
from fastapi.middleware.cors import CORSMiddleware
from services.movie_service import (
    create_movie,
    get_all_movies,
    get_movie_by_id,
    get_movies_by_genre
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from services.booking_service import (
    create_booking,
    get_bookings
)


@app.get("/movies")
def movies():
    return get_all_movies()


@app.get("/movies/{movie_id}")
def movie(movie_id: str):
    return get_movie_by_id(movie_id)


@app.get("/movies/genre/{genre}")
def genre_movies(genre: str):
    return get_movies_by_genre(genre)

@app.post("/movies")
def add_movie(movie: dict = Body(...)):
    return create_movie(movie)

@app.post("/bookings")
def book_movie(data: dict = Body(...)):
    return create_booking(data)


@app.get("/bookings")
def bookings():
    return get_bookings()