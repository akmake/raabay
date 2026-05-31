import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || (process.env.NODE_ENV === 'production' ? '' : 'mongodb://localhost:27017/bus');

    if (!uri) {
      console.warn('MongoDB connection skipped: MONGO_URI is not configured.');
      return;
    }

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host} / ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (process.env.NODE_ENV === 'production') {
      console.warn('Server is continuing without MongoDB.');
      return;
    }

    process.exit(1);
  }
};

export default connectDB;
