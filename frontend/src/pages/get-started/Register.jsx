import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { login, setAuthError } from "../../store/slices/authSlice";
import { registerSchemaValidation } from "../../utils/FormValidationSchemas";
import { FormInput } from "../../components";

const Register = ({ setPage }) => {
  const dispatch = useDispatch();

  // Submit Form
  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/register`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const token = response.data.data.accessToken;
      dispatch(
        login({
          error: null,
          user: response.data.data.user,
          token,
          tokenExpiration: response.data.tokenExpiration,
        })
      );
      localStorage.setItem("authToken", token);
      return token;
    } catch (error) {
      setSubmitting(false);
      if (error.response) {
        const apiError = error.response.data.message || "An error occurred";
        setErrors({ apiError });
        dispatch(setAuthError(apiError));
      } else if (error.request) {
        const apiError = "No response from server";
        setErrors({ apiError });
        dispatch(setAuthError(apiError));
      } else {
        const apiError = "An error occurred while making the request";
        setErrors({ apiError });
        dispatch(setAuthError(apiError));
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
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      password: "",
      password2: "",
    },
    validationSchema: registerSchemaValidation,
    onSubmit,
  });

  return (
    <div className="p-10 col-span-2">
      <h4 className="mb-2 text-3xl font-bold text-black">Sign Up</h4>
      <p className="mb-10 text-sm text-gray-600">
        Hey, Enter your details to create your account
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-5 w-full"
      >
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <FormInput
          label="Username"
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && errors.username}
        />
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && errors.firstName}
        />
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && errors.lastName}
        />
        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          placeholder="Date Of Birth"
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.dateOfBirth && errors.dateOfBirth}
        />
        <div></div>
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
        <div className="col-span-2">
          {errors.apiError && (
            <span className="block text-sm text-red-500 mb-4">
              {errors.apiError}
            </span>
          )}

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Register"}
          </button>
          <p className="mt-10 text-sm">
            Already a member?{" "}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setPage("login")}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
