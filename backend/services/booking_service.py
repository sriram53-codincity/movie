from pymongo import MongoClient

from config import MONGO_URL, DB_NAME

client = MongoClient(MONGO_URL)

db = client[DB_NAME]

collection = db["bookings"]


def create_booking(data):
    result = collection.insert_one(data)

    data["_id"] = str(result.inserted_id)

    return data


def get_bookings():
    bookings = list(collection.find())

    for booking in bookings:
        booking["_id"] = str(booking["_id"])

    return bookings