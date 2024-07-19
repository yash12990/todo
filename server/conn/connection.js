import mongoose from "mongoose";
import "dotenv";

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://guptayash12990:yash12345@cluster-1.ekzrhvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"
      )
      .then(() => console.log("Connected to MongoDB Database!"));
  } catch (error) {
    console.log("Error connecting to MongoDB Database");
  }
};

conn();
