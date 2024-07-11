import express from "express";
import bodyparser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5010;

app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) =>
  res.send("Welcome to Home Page of ToDo Application")
);
app.use("/users", userRoutes);
// app.use("/todos", tasksRoutes);

mongoose
  .connect(
    "mongodb+srv://guptayash12990:yash12345@cluster-1.ekzrhvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1"
  )
  .then(() => {
    console.log("Connected to MongoDB Database!");
    app.listen(PORT, () =>
      console.log("Server running on: https://localhost:", PORT)
    );
  })
  .catch((err) => console.log("Unable to connect to database"));
