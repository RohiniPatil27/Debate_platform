import ApiError from "./apiError.js";

export const notEmptyValidation = (fields) => {
  if (fields.some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  return fields;
};

// Email Validation Function
export const emailValidation = (email) => {
  if (!email || typeof email !== "string") {
    throw new Error("Email is required.");
  }

  if (!emailValidation.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  return email.trim().toLowerCase();
};
// Test Method on Email Validation
emailValidation.test = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

// Username Validation Function
export const usernameValidation = (username) => {
  if (!username || typeof username !== "string") {
    throw new ApiError(400, "Username is required.");
  }

  if (!usernameValidation.test(username)) {
    throw new ApiError(
      400,
      "Username must be 3-16 characters long and contain only letters and numbers."
    );
  }

  return username.trim().toLowerCase();
};
// Test Method on Username Validation
usernameValidation.test = (username) => {
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  return usernameRegex.test(username.trim());
};

// Password Validation
export const passwordValidation = (password) => {
  if (password.length <= 6) {
    throw new ApiError(400, "Password length must be minimum 6 characters");
  }
  return password;
};

// Compare Field Validation
export const compareFieldValidation = (input1, input2, errMessage) => {
  if (input1 !== input2) {
    throw new ApiError(400, errMessage || "Two inputs value does not match");
  }
  return true;
};
