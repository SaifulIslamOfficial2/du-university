import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContex";
import laptopGirl from "../../src/assets/img/laptopGirl.jpg";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// validation
const schema = yup
  .object({
    name: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    photo: yup.mixed().notRequired(), // photo optional
  })
  .required();

// function======================================
function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, registerFn, signInWithGooglePopUp, updateUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // handleRegister function
  const handleRegister = (data) => {
    registerFn(data.email, data.password)
      .then((result) => {
        let photoURL = null;
        if (data.photo && data.photo.length > 0) {
          photoURL = URL.createObjectURL(data.photo[0]);
        }
        updateUser({
          displayName: data.name,
          photoURL: photoURL,
        });
        setUser({
          ...result.user,
          displayName: data.name,
          photoURL: photoURL,
        });
        toast.success("Registration successful!");
        reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleWithGoogle = () => {
    signInWithGooglePopUp()
      .then(async (result) => {
        const user = result.user;
        if (!user.photoURL && user.providerData[0]?.photoURL) {
          await updateProfile(user, {
            photoURL: user.providerData[0].photoURL,
          });
        }
        setUser(user);
        toast.success("Google sign-in successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Column: Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create an account
            </h1>

            <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  {...register("name")}
                  placeholder="Fill your username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.name?.message}</p>
              </div>
              {/* imh */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Photo
                </label>
                <div className="relative w-full">
                  <input
                    type="file"
                    {...register("photo")}
                    accept="image/*"
                    className="block w-full text-sm text-gray-500
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0
                 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100
                 cursor-pointer
                 border border-gray-300 rounded-md
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  {...register("email")}
                  placeholder="Fill your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Fill your password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                />

                {/* Eye toggle button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>

                <p className="text-red-500 text-sm">
                  {errors.password?.message}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Create an account
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={handleWithGoogle}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Sign Up with Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/loginPage"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Right  Img */}

          <div className="hidden md:flex flex-col justify-between p-4">
            {/* Info Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                Welcome to Daffodil University Portal
              </h2>
              <p className="text-gray-700 mb-2">
                Register your account to access courses, tutorials, and
                exclusive content. Make sure to use a valid email and a strong
                password.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Use a unique username for your profile.</li>
                <li>Your password should be at least 6 characters long.</li>
                <li>Sign up with Google for faster registration.</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">
                Already have an account? Click
                <Link
                  to="/loginPage"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Login
                </Link>
                .
              </p>
            </div>

            {/* Image Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={laptopGirl}
                alt="Laptop Girl"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
