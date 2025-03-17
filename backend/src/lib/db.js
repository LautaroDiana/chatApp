import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB database connected at: ${conn.connection.host}`);
  } catch (error) {
    console.error("ERR Unable to make connection", error);
  }
};
