import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getAllBooks);
router.get("/:id", getBookById);

// Protected Routes
router.post("/", authMiddleware, createBook);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

export default router;
