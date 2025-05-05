import { Router } from "express";
import {
  fetchUserProfileController,
  forgotPasswordController,
  forgotPasswordRequestController,
  loginUserController,
  logoutUserController,
  refreshAccessTokenController,
  registerUserController,
  resetPasswordController,
  verifyAccountController,
  verifyAccountRequestController,
} from "../controllers/user.controllers.js";
import uploadMiddleware from "../middlewares/multer.middlewares.js";
import { isLoggedIn } from "../middlewares/auth.middlewares.js";

const router = Router();

// Upload folders

// Routes
router.route("/register").post(registerUserController);
router.route("/login").post(loginUserController);
router.route("/logout").post(isLoggedIn, logoutUserController);

router.route("/fetch-profile").get(isLoggedIn, fetchUserProfileController);
router.route("/refresh-access-token").post(refreshAccessTokenController);

router.route("/forgot-password").post(forgotPasswordController);
router.route("/forgot-password-request").patch(forgotPasswordRequestController);
router.route("/reset-password").patch(isLoggedIn, resetPasswordController);

router
  .route("/verify-account-request")
  .patch(isLoggedIn, verifyAccountRequestController);
router.route("/verify-account").patch(isLoggedIn, verifyAccountController);

export default router;
