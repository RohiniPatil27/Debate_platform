import axios from "axios";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { login, setAuthError } from "../../store/slices/authSlice";
import { loginSchemaValidation } from "../../utils/FormValidationSchemas";
import { FormInput } from "../../components";
import { AuthImage } from "../../static/images";

const Login = ({ setPage }) => {
  const dispatch = useDispatch();

  // Submit Form
  const onSubmit = async (values, { setErrors, setSubmitting }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/users/login`,
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
      identifier: "",
      password: "",
    },
    validationSchema: loginSchemaValidation,
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
        <h4 className="mb-2 text-3xl font-bold text-black">Sign In</h4>
        <p className="mb-10 text-sm text-gray-600">
          Hey, Enter your details to sign in to your account
        </p>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email / Username"
            type="email"
            name="identifier"
            placeholder="Email / Username"
            value={values.identifier}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.identifier && errors.identifier}
          />
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

          {errors.apiError && (
            <span className="block text-sm text-red-500 mb-4">
              {errors.apiError}
            </span>
          )}

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Login"}
          </button>
          <p className="mt-10 text-sm">
            Not a member?{" "}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setPage("register")}
            >
              Register
            </span>
          </p>
          <p className="mt-2 text-sm">
            Forgot Password?{" "}
            <span
              className="text-black font-bold cursor-pointer"
              onClick={() => setPage("forgot-password")}
            >
              Reset
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
