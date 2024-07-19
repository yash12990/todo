import { Router } from "express";
import { getAllTasks } from "../controllers/tasksController";

const router = Router();

router.get("/", getAllTasks);




export default router;
