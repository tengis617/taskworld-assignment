import mongoose from 'mongoose';

// connect to mongo using mongoose
async function connect(url) {
  await mongoose.connect(url, { useMongoClient: true });
}

// dev
const url = 'mongodb://localhost:27017/';
connect(url);
const db = mongoose.connection;

export default db;
