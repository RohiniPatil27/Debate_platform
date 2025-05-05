import { Router } from "express";
import { getAllRoomsController } from "../controllers/room.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").get(getAllRoomsController);

export default router;
