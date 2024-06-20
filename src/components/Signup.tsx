import authService from "../appwrite/auth"
import { login } from "../store/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../store/hooks"
import { useForm } from "react-hook-form"
import { useState, useId } from "react"
import Logo from "./Logo"
import Input from "./Input"
import Button from "./Button"


export default function Signup() {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit} = useForm();
    const id = useId();

    const create = async(data: any) => {
        setError('');
        try {
            const session = await authService.createAccount(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate('/')
            } else {
                console.log("Session is missing");
            }
        } catch (error) {
            console.log("Error while creating account:", error);
            throw error;
        }
    }

  return (
    <div className="bg-[#84A98C]/75 w-[400px] h-[500px] flex flex-col items-center justify-evenly gap-4 py-4 rounded-lg flex-wrap">
        <div>
            <Logo className="text-black" />
        </div>
        <div>
            <h2>Sign Up to Create Account</h2>
        </div>
        <div>
            <p>
                Already have an Account?
                <Link to='login' className="text-purple-900 font-medium">Login</Link>
            </p>
        </div>
        <div>
            {error && <p className="text-red-600">{error}</p>}
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(create)}>
            <Input 
            label="Name :"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
                required: true
            })}
            />
            <Input 
            label="Email :"
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
            label="Password :"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
                required: true
            })}
            />
            <Button type="submit" className="" >Create Account</Button>
        </form>
    </div>
  )
}
