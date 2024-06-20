import { useAppDispatch } from "../store/hooks";
import { login as authLogin } from "../store/authSlice";
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../appwrite/auth";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";


export default function Login() {

    const [error, setError] = useState('');
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const login = async(data: any) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
              const userData = await authService.getCurrentUser();
              if (userData) dispatch(authLogin(userData));
              navigate('/');
            }
        } catch (error) {
            console.log("Error while logging user:", error);
            throw error;
        }
    }

  return (
    <div className="bg-[#84A98C]/75 w-[400px] h-[450px] flex flex-col items-center justify-evenly gap-4 py-4 rounded-lg flex-wrap" >
      <div>
        <Logo className='text-black' />
      </div>
      <div>
        <h2 className="font-bold text-2xl">Sign  in to your account</h2>
      </div>
      <div>
        <p>
          Don&apos;t have any account?&nbsp;
          <Link to='/signup' className="font-medium text-purple-900">Signup</Link>
        </p>
      </div>
      <div>
        {error && <p className="text-red-600">{error}</p>}
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(login)}>
        <Input 
        label="Email: " 
        type="email" 
        placeholder="Enter your email"
        {...register("email", {
          required: true,
          validate: {
            matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value)|| "Email address must be valid address"
          }
        })} 
        />
        <Input 
        label="Password: " 
        type="password" 
        placeholder="Enter your password" 
        {...register("password", {
          required: true
        })} 
        />
        <Button className="" type="submit" >Sign In</Button>
      </form>
    </div>
  )
}
