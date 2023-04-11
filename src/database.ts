import mongoose from 'mongoose';

const URI = "mongodb://0.0.0.0:27017/pet-tracker"

mongoose
    .connect(URI)
    .then(_db => console.log('Database is connected'))
    .catch(err => console.log(err));