import Tag from "../models/tag.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

// Get All Tags Controller
export const getAllTagsController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Tags
   * TODO: Sending Response
   * **/

  // * Get All Tags
  const tags = await Tag.find({});

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, tags, "Fetched all tags successfully!"));
});

// Create Tag Controller
export const createTagController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: validate data
   * TODO: Check if tag exists
   * TODO: Create a new tag
   * TODO: Sending Response
   * **/

  // * Get data from frontend
  const reqUser = req.user;
  const { name, description } = req.body;

  // * Validate Data
  notEmptyValidation([name, description]);

  // * Check if Tag exists
  const existingTag = await Tag.findOne({ name });
  if (existingTag) {
    throw new ApiError(400, "Tag already exists!");
  }

  // * Create a new Tag
  const tag = await Tag.create({
    name,
    description,
    user: reqUser._id,
  });

  // * Sending Response
  res.status(201).json(new ApiResponse(201, tag, "Tag created successfully!"));
});

// Tag Detail Controller
export const tagDetailController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Id from Params
   * TODO: Fetch Detail
   * TODO: Sending Response
   * **/

  // * Get Id from Params
  const tagId = req.params.id;

  // * Fetch Detail
  const tag = await Tag.findById(tagId);
  if (!tag) throw new ApiError(404, "Tag not found!");

  // * Sending Response
  res.status(200).json(new ApiResponse(200, tag, "Tag fetched successfully!"));
});

// Tag Update Controller
export const tagUpdateController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from request
   * TODO: Validate data
   * TODO: Update Tag
   * TODO: Sending Response
   * **/

  // * Get data from request
  const tagId = req.params.id;
  const { name, description } = req.body;

  // * Validate Tag Id
  const tag = await Tag.findById(tagId);
  if (!tag) throw new ApiError(404, "Tag not found!");

  // * Validate Data
  // Check if the name has changed
  if (name !== tag.name) {
    // * Check if the new name already exists in the database
    const existingName = await Tag.findOne({ name });

    if (existingName) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Name already exists"));
    }
  }

  // * Update Tag
  tag.name = name;
  tag.description = description;
  await tag.save();

  // * Sending Response
  res.status(200).json(new ApiResponse(200, tag, "Tag updated successfully!"));
});

// Tag Delete Controller
export const tagDeleteController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Id from Params
   * TODO: Delete Tag
   * TODO: Sending Response
   * **/

  // * Get Id from Params
  const tagId = req.params.id;

  // * Fetch Tag
  const tag = await Tag.findByIdAndDelete(tagId);
  if (!tag) throw new ApiError(404, "Tag not found!");

  // * Sending Response
  res.status(200).json(new ApiResponse(200, null, "Tag deleted successfully!"));
});
