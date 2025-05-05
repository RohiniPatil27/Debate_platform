import * as yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Register Schema Validation
export const registerSchemaValidation = yup.object().shape({
  username: yup.string().required("Please enter Username"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(emailRegex, "Email format is invalid")
    .required("Please enter Email"),
  firstName: yup.string().required("Please enter First Name"),
  dateOfBirth: yup.date().required("Please enter Date Of Birth"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter Password"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});

// Login Schema Validation
export const loginSchemaValidation = yup.object().shape({
  identifier: yup.string().required("Please enter Email / Username"),
  password: yup.string().required("Please enter Password"),
});

// Forgot Password Schema Validation
export const forgotPasswordSchemaValidation = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .matches(emailRegex, "Email format is invalid")
    .required("Please enter Email"),
});

// Forgot Password Request Schema Validation
export const forgotPasswordRequestSchemaValidation = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter Password"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match"),
});
