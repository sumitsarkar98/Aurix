import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constant.js";

dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URI, {
      dbName: DB_NAME,
    });

    console.log(
      `from db_connection : MongoDB is connected successfully !! ${connectionInstance.connection.name}`,
    );
  } catch (err) {
    console.error("from db_connection : SORRY !! can't connect MongoDB.", err);
    process.exit(1);
  }
};

export default connectDB;
