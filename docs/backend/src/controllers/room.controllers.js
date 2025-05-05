import Room from "../models/room.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

// Get All Rooms Controller
export const getAllRoomsController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Rooms
   * TODO: Sending Response
   * **/

  // * Fetch all rooms
  const rooms = await Room.find({});

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, rooms, "Fetched all rooms successfully!"));
});
