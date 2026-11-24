import { use, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";
export const useAuth = ()=>
{
  let dispatch = useDispatch()
  let navigate = useNavigate();
  let {register,formState:{errors},handleSubmit,reset} = useForm()
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
  
  const registerForm = (data)=>{
    let arr = [...registeredUsers,data]
    setRegisteredUsers(arr)
    toast.success("user registered")
    localStorage.setItem("registeredUsers",JSON.stringify(arr))

  }
  const loginForm = (data)=>{
    let user = registeredUsers.find((val)=>
    {
      return val.email === data.email && val.password === data.password;
    })
    
    if (!user)
      {
        toast.error("Invalid credentials")
        return
      }
      dispatch(addUser(user))
      localStorage.setItem("loggedinUser",JSON.stringify(user));
      toast.success("user logged in")
      reset();

    }

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    loginForm,
    registerForm
  }
}