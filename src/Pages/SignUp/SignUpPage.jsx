import React from "react";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign-Up Data", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br  from-white via-black/[20%] to-gray-300">
      <div className="w-[40rem] p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="avatar">
            <div className="w-20 rounded-full drop-shadow-xl bg-gray-200">
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
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium">Email</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
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

            {/* Location Field */}
            <div className="relative">
              <label className="block text-sm font-medium">Location</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  {...register("location", { required: "Location is required" })}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.location && (
                <span className="text-red-500 text-sm">
                  {errors.location.message}
                </span>
              )}
            </div>

            {/* Phone Field (spans both columns) */}
            <div className="relative">
              <label className="block text-sm font-medium">Phone</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone number is required" })}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div><div className="relative">
              <label className="block text-sm font-medium">Phone</label>
              <div className="flex items-center">
                <div className="absolute left-3 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  {...register("phone", { required: "Phone number is required" })}
                  className="input input-bordered w-full pl-10"
                />
              </div>
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
                      
          </div>

          {/* Sign-Up Button */}
          <button type="submit" className="btn btn-primary w-full mt-4 text-white">
            SIGN UP
          </button>
              </form>
              <h2 className="text-center mt-2">
                  Already have an account? 
                  <Link to="/login" className="ms-2 font-semibold text-indigo-500">Sign In</Link>
              </h2>
      </div>
    </div>
  );
};

export default SignUpPage;
