import express from "express";
import { connectDatabase } from "./src/configs/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Working");
});
import userRoutes from "./src/routes/users.route.js";
app.use("/api/v1/users", userRoutes);

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log("Server Running on Port 4000");
});
