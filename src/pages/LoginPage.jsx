import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    signInWithGooglePopUp,
    loginWithEmailAndPasswordFn,
    resetPasswordFn,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const emailValue = watch("email");

  //  Login with email/password
  const handleLoginEmailandPassword = async (data) => {
    try {
      const result = await loginWithEmailAndPasswordFn(
        data.email,
        data.password
      );
      if (result) {
        toast.success("Login successful!");
        reset();
        navigate(location.state || "/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //  Google Login
  const handleWithGoogle = () => {
    signInWithGooglePopUp()
      .then(() => {
        toast.success("Login successful!");
        navigate(location.state || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  // ✅ Password Reset
  const handleForgotPassword = async () => {
    if (!emailValue) {
      toast.warning("Please enter your email first!");
      return;
    }
    try {
      await resetPasswordFn(emailValue);
      toast.info("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-1">
          Welcome Back
        </h2>

        {/* Logo */}
        <div className="flex justify-center items-center mb-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 font-bold text-xl"
          >
            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
              DU
            </div>
            <div className="flex flex-col">
              <span>Daffodil</span>
              <span className="mt-[-6px] text-indigo-600">University</span>
            </div>
          </Link>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleLoginEmailandPassword)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-teal-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>

            <p className="text-red-500 text-sm">{errors.password?.message}</p>

            {/* ✅ Forgot Password */}
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-teal-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={handleWithGoogle}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Sign In with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-teal-600 font-medium hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
