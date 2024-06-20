import { Link } from "react-router-dom"
import Logo from "../Logo"
import { useAppSelector } from "../../store/hooks"
import LogoutBtn from "./LogoutBtn";

export default function Header() {

    const authStatus = useAppSelector((state) => state.auth.status);

    return (
        <div className="w-full">
            <nav className="w-full h-16 bg-[#52796F] flex items-center ">
                <div className="w-[50%]">
                    <Logo className=""/>
                </div>
                <div className=" flex flex-row list-none gap-24 font-semibold w-[45%] text-white">
                    <li className="hover:underline underline-offset-4"><Link to="/">Home</Link></li>
                    <li className="hover:underline underline-offset-4"><Link to="/about">About</Link></li>
                    <li className="hover:underline underline-offset-4"><Link to="/posts">Posts</Link></li>
                    <li className="hover:underline underline-offset-4"><Link to="/add-post">Add Post</Link></li>
                </div>
                <div className="flex gap-4">
                    <Link to='/login' className="bg-white/75 rounded-lg px-4 py-2 font-bold hover:bg-white/60">Login</Link>
                    <Link to='/signup' className="bg-white/75 rounded-lg px-4 py-2 font-bold hover:bg-white/60 " >SignUp</Link>
                </div>
                <div className="pr-2">
                    {authStatus && ( <li><LogoutBtn /></li> )}
                    {/* <LogoutBtn />   */}
                </div>
            </nav>
        </div>
    )
}