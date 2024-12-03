import React from "react";
import { useForm } from "react-hook-form";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white via-black/[20%] to-gray-300">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="avatar">
            <div className="w-20 drop-shadow-xl rounded-full bg-gray-100 mb-5">
            <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring ring-offset-2">
                <img src="https://1000springs.org.nz/static/img/icons/login.png" />
             </div>
        </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username Field */}
          <div className="relative">
            <label className="block text-sm font-medium">Username</label>
            <div className="flex items-center">
              <div className="absolute left-3 text-gray-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="input input-bordered w-full pl-10"
              />
            </div>
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <div className="flex items-center">
              <div className="absolute left-3 text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="input input-bordered w-full pl-10"
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("remember")}
                className="checkbox"
              />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full">
            LOGIN
          </button>
              </form>
              <h2 className="text-center  text-sm mt-2">New to Mamud Heath Care?
                  <Link
                      to="/signup"
                      className="font-semibold text-indigo-500 ms-2">SignUp</Link>
              </h2>
      </div>
    </div>
  );
};

export default LoginPage;
