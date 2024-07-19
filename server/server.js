import express from "express";
import bodyparser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import cors from "cors";
import "./conn/connection.js";

const app = express();
const PORT = 5010;

app.use(bodyparser.json());
app.use(cors());
// cors({
//   origin: "http://localhost:3001",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"],
// })
// );

app.get("/", (req, res) =>
  res.send("Welcome to Home Page of ToDo Application")
);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tasks", tasksRoutes);

app.listen(PORT, () =>
  console.log("Server running on: https://localhost:", PORT)
);
