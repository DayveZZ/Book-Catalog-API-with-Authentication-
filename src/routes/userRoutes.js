import { Router } from "express";
import {
  deleteUser,
  getSingleUser,
  loginUser,
  signUpUser,
  updateUser,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);

router.get("/", authMiddleware, getSingleUser);
router.patch("/", authMiddleware, updateUser);
router.delete("/", authMiddleware, deleteUser);

// query query
router.get("/query", (req, res) => {
  const { name, password, secure } = req.query;
  res.send(
    `User Route is Working with Name: ${name} and Password: ${password} and Secure: ${secure}`
  );
});

// req.params
router.get("/:email/:password", (req, res) => {
  const { email, password } = req.params;
  res.send(
    `User Route is Working with Email: ${email} and Password: ${password}`
  );
});

export default router;
