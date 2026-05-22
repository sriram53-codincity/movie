from pymongo import MongoClient
from bson import ObjectId

from config import (
    MONGO_URL,
    DB_NAME,
    COLLECTION_NAME
)

client = MongoClient(MONGO_URL)

db = client[DB_NAME]

collection = db[COLLECTION_NAME]


def convert_id(movie):
    movie["_id"] = str(movie["_id"])
    return movie


def get_all_movies():
    movies = list(collection.find())

    return [convert_id(movie) for movie in movies]


def get_movie_by_id(movie_id):
    movie = collection.find_one({
        "_id": ObjectId(movie_id)
    })

    if movie:
        return convert_id(movie)

    return None


def get_movies_by_genre(genre):
    movies = list(collection.find({
        "genre": genre
    }))

    return [convert_id(movie) for movie in movies]


def create_movie(movie):
    result = collection.insert_one(movie)

    movie["_id"] = str(result.inserted_id)

    return movie