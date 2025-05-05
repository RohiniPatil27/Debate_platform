import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import {
  compareFieldValidation,
  emailValidation,
  notEmptyValidation,
  passwordValidation,
  usernameValidation,
} from "../utils/validators.js";
import {
  generateVerificationToken,
  generate20CharToken,
  generateAccessRefreshToken,
  options,
  generatePasswordResetToken,
} from "../utils/generateToken.js";

// Register User Controller
export const registerUserController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: Validate Data
   * TODO: Check if user exist
   * TODO: Create new user
   * TODO: Sending Response
   * **/

  // * Get data from frontend
  const {
    username,
    email,
    firstName,
    lastName,
    dateOfBirth,
    password,
    password2,
  } = req.body;

  // * Validate Data
  notEmptyValidation([
    username,
    email,
    firstName,
    dateOfBirth,
    password,
    password2,
  ]);
  emailValidation(email);
  usernameValidation(username);
  passwordValidation(password);
  compareFieldValidation(password, password2, "Password does not match");

  // * Check if user exist
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    throw new ApiError(400, "Email already in use");
  }
  const usernameExist = await User.findOne({ username });
  if (usernameExist) {
    throw new ApiError(400, "Username already in use");
  }

  // * Create new user
  const createdUser = await User.create({
    username,
    email,
    firstName,
    lastName,
    dateOfBirth,
    password,
  });

  // * Check if user is created
  const user = await User.findById(createdUser._id);
  if (!user) {
    throw new ApiError(500, "Error creating user, Please try again!");
  }

  // * Save Verification Code
  const token = generate20CharToken();
  generateVerificationToken(user._id, token);
  // ! Sending Verification Code does not work

  // * Generate Access & Refresh Token
  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );

  // * Sending Response
  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        201,
        {
          user,
          accessToken,
          refreshToken,
        },
        "User created successfully!"
      )
    );
});

// Login User Controller
export const loginUserController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from user
   * TODO: Validate data
   * TODO: Check if user exists
   * TODO: Check Password
   * TODO: Generate Token
   * TODO: Sending Response
   * **/

  // * Get data from User
  const { identifier, password } = req.body;

  // * Validate data
  notEmptyValidation([identifier, password]);

  // * Determine if the identifier is an email or username
  let isEmail = false;
  if (emailValidation.test(identifier)) {
    isEmail = true;
  } else if (!usernameValidation.test(identifier)) {
    throw new ApiError(400, "Invalid email or username format.");
  }

  // * Find user based on identifier type
  const user = await User.findOne(
    isEmail ? { email: identifier } : { username: identifier }
  ).select("password");

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  // * Check Password
  const passwordCheck = await user.isPasswordCorrect(password);
  if (!passwordCheck) {
    throw new ApiError(401, "Invalid password");
  }

  // * Generate Token
  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id);

  // * Sending Response
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully!"
      )
    );
});

// Logout Controller
export const logoutUserController = asyncHandler(async (req, res) => {
  /**
   * TODO: Update token in backend
   * TODO: Delete cookie from frontend
   * TODO: Sending Response
   * **/

  // * Update token in backend
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );

  // * Sending Response & Delete cookie from frontend
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out!"));
});

// Fetch User Profile Controller
export const fetchUserProfileController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get User from Request
   * TODO: Send Response
   * **/

  // * Get User from Request
  const requestUser = req.user;
  const user = await User.findById(requestUser._id);

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, user, "Fetched User Profile Successfully!"));
});

// Refresh Access Token Controller
export const refreshAccessTokenController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Refresh token from cookie
   * TODO: Decode Refresh Token
   * TODO: Check if user exists
   * TODO: Compare cookie refresh token with refresh token stored in database
   * TODO: Generate new access token
   * TODO: Sending Response
   * **/

  // * Get Refresh token from cookie or body
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized Request");
  }

  try {
    // * Decode refresh token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // * Check if user exists
    const user = await User.findById(decodedToken._id).select("refreshToken");
    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    // * Compare cookie refresh token with refresh token stored in database
    if (incomingRefreshToken !== user.refreshToken) {
      return res.status(401).json({ message: "Refresh token is expired!" }); // Fix: Added return
    }

    // * Generate new access token
    const { accessToken, refreshToken } = await generateAccessRefreshToken(
      user._id
    );

    // * Save new refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    // * Sending Response
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refreshed!"
        )
      );
  } catch (error) {
    throw new ApiError(
      401,
      error.message || "Invalid or expired refresh token"
    );
  }
});

// Forgot Password Controller
export const forgotPasswordController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get email from frontend
   * TODO: Validate data
   * TODO: Check if user exists
   * TODO: Sending Email with password reset token
   * TODO: Sending Response
   * **/

  // * Get email from frontend
  const { email } = req.body;

  // * Validate data
  if (!email) {
    throw new ApiError(400, "Please enter your email.");
  }
  emailValidation(email);

  // * Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User does not exist");
  }

  // * Sending Email with password reset token
  const token = generate20CharToken();
  generatePasswordResetToken(user._id, token);
  // ! if (email) sendPasswordResetEmail(user.email, user.firstName, token);
  // ! if (phoneNumber) sendPasswordResetMessage(user.phoneNumber, user.firstName, token);

  // * Sending Response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password reset link sent to your email"));
});

// Forgot Password Request Controller
export const forgotPasswordRequestController = asyncHandler(
  async (req, res) => {
    /**
     * TODO: Get token from URL
     * TODO: Check if token is valid
     * TODO: Get data from Frontend
     * TODO: Validate data
     * TODO: Update new password
     * TODO: Sending Response
     * **/

    // * Get token from URL
    const { token } = req.query;
    if (!token) throw new ApiError(400, "Token is required");

    // * Check if token is valid
    const user = await User.findOne({ passwordResetToken: token });
    if (!user) {
      throw new ApiError(400, "Invalid token");
    }

    const currentDate = new Date();
    if (currentDate > user.passwordResetTokenExpiry) {
      throw new ApiError(400, "Password reset token has expired");
    }

    // * Get data from Frontend
    const { password, password2 } = req.body;

    // * Validate data
    notEmptyValidation([password, password2]);
    passwordValidation(password);
    compareFieldValidation(password, password2, "Password does not match");

    // * Update new password
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiry = undefined;
    await user.save();

    // * Sending Response
    return res
      .status(200)
      .json(new ApiResponse(200, {}, "Password updated successfully!"));
  }
);

// Reset Password Controller
export const resetPasswordController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: Validate data
   * TODO: check if old password is correct
   * TODO: Update password to new password
   * TODO: Sending Response
   * **/

  // * Get data from frontend
  const { oldPassword, password, password2 } = req.body;

  // * Validate data
  notEmptyValidation([oldPassword, password, password2]);
  passwordValidation(password);
  if (oldPassword === password) {
    throw new ApiError(400, "Old password cannot be same as new password");
  }
  compareFieldValidation(password, password2, "Password does not match");

  // * Check if old password is correct
  const user = await User.findById(req.user._id).select("password");
  const passwordCheck = await user.isPasswordCorrect(oldPassword);
  if (!passwordCheck) {
    throw new ApiError(400, "Old password is incorrect");
  }

  // * Update password to new password
  user.password = password;
  await user.save();

  // * Sending Response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password updated successfully!"));
});

// Verify Account Request Controller
export const verifyAccountRequestController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get user from request
   * TODO: Check if is verified, if not send verification email
   * TODO: Sending Response
   * **/

  // * Get user from request
  const user = req.user;

  // * Check if is verified, if not send verification email
  if (user.isVerified) {
    throw new ApiError(400, "Account is already verified");
  }

  // * Sending Verification Email
  const token = generate20CharToken();
  generateVerificationToken(user._id, token);
  // ! sendVerificationEmail(user.email, user.firstName, token);

  // * Sending Response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Verification link sent to your email"));
});

// Verify Account Controller
export const verifyAccountController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get token from params
   * TODO: Validate token
   * TODO: Verify account
   * TODO: Sending Response
   * **/

  // * Get token from params
  const { token } = req.query;
  if (!token) throw new ApiError(400, "Token is required");

  // * Validate token
  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    throw new ApiError(400, "Invalid token");
  }
  const currentDate = new Date();
  if (currentDate > user.verificationTokenExpiry) {
    throw new ApiError(400, "Verification token has expired");
  }

  // * Verify account
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiry = undefined;
  await user.save();

  // * Sending Response
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Account verified successfully!"));
});
