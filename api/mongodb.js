import mongoose from 'mongoose';

export default async function connect(url) {
  await mongoose.connect(url, { useMongoClient: true });
}
