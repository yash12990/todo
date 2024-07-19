import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  // addTask,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/register", createUser);
router.post("/login", getUserById);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);
// router.post("/:id/add-task", addTask);

export default router;
