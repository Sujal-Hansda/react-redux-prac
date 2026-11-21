
import { Mail, Lock } from "lucide-react";
import { useAuth } from "../hooks/authHooks";


const LoginPage = () => {
  
  let {navigate,loginForm,register,errors,handleSubmit} = useAuth();
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">

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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <p  onClick={()=>{navigate("/register")}} className="cursor-pointer text-blue-600 font-semibold ml-1">
            Sign up
          </p>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
