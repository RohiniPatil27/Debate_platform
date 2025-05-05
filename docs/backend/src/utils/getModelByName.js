import User from "../models/user.model.js";
import Tag from "../models/tag.model.js";

// Get Model by name
const getModelByName = (modelName) => {
  switch (modelName) {
    case "User":
      return User;
    case "Tag":
      return Tag;
    default:
      return null;
  }
};

export default getModelByName;
