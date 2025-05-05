import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

import { FormInput } from "../../components";
import { AuthImage } from "../../static/images";
import { forgotPasswordRequestSchemaValidation } from "../../utils/FormValidationSchemas";

const ForgotPasswordRequest = () => {
  const [message, setMessage] = useState(null);

  // Submit Form
  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/forgot-password`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setMessage(
        response.data.message ||
          "Password reset link has been sent to your email."
      );

      return;
    } catch (error) {
      setSubmitting(false);
      if (error.response) {
        const apiError = error.response.data.message || "An error occurred";
        setErrors({ apiError });
      } else if (error.request) {
        const apiError = "No response from server";
        setErrors({ apiError });
      } else {
        const apiError = "An error occurred while making the request";
        setErrors({ apiError });
      }
    }
  };

  // Formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      password: "",
      password2: "",
    },
    validationSchema: forgotPasswordRequestSchemaValidation,
    onSubmit,
  });

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={AuthImage}
          alt="Auth Image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="relative p-10">
        <h4 className="mb-2 text-3xl font-bold text-black">Forgot Password</h4>
        <p className="mb-10 text-sm text-gray-600">
          Hey, Enter your email to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password2 && errors.password2}
          />

          {errors.apiError && (
            <span className="block text-sm text-red-500 mb-4">
              {errors.apiError}
            </span>
          )}

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Reset Password"}
          </button>

          {message && (
            <p className="mt-3 font-medium text-sm bg-green-400 px-3 py-2 rounded">
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ForgotPasswordRequest;
