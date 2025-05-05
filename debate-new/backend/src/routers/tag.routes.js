import { Router } from "express";

import {
  createTagController,
  getAllTagsController,
  tagDeleteController,
  tagDetailController,
  tagUpdateController,
} from "../controllers/tag.controllers.js";
import {
  isAuthorized,
  isLoggedIn,
  isUserVerified,
} from "../middlewares/auth.middlewares.js";

const router = Router();

// Routes
router.route("/").post(isLoggedIn, isUserVerified, createTagController);
router.route("/all").get(getAllTagsController);
router.route("/:id").get(tagDetailController);
router
  .route("/:id")
  .patch(isLoggedIn, isUserVerified, isAuthorized("Tag"), tagUpdateController);
router
  .route("/:id")
  .delete(isLoggedIn, isUserVerified, isAuthorized("Tag"), tagDeleteController);

export default router;
