import { useAuth } from "../hooks/authHooks";
import { User, Mail, Lock } from "lucide-react";

const RegisterPage = () => {
  let {navigate,registerForm,register,handleSubmit,errors} = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Sign up to get started
          </p>
        </div>

        <form onSubmit={handleSubmit(registerForm)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <User size={18} className="text-gray-400" />

              <input
               {...register("name",{
                required:"name is required"
               })}
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <Mail size={18} className="text-gray-400" />

              <input
              {...register("email",{
                required:"email is required",
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />

            </div>
          </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />

              <input
              {...register("password",{
                required:"password is required",
                minLength:{
                  value:8,
                  message:"minimum 8 characters are required"
                }
              })}
                type="password"
                placeholder="Create a password"
                className="w-full p-3 outline-none"
              />

            </div>
          </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}


          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <p  onClick={()=>{navigate("/")}} className="cursor-pointer text-blue-600 font-semibold ml-1">
            Login
          </p>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
