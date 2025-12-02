import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// IMPORTS MUST STAY AT TOP
import userRoutes from "./src/routes/userRoutes.js";
import bookRoutes from "./src/routes/bookRoutes.js";
import { connectDatabase } from "./src/configs/db.js";

dotenv.config();

const app = express();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server Running on Port ${Port}`);
});
