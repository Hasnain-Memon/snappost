import { useAppDispatch } from "../../store/hooks"
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";


export default function LogoutBtn() {

    const dispatch = useAppDispatch()

    const logoutHandler = (e: any) => {
        e.preventDefault();
        authService.logout()
            .then(() => {dispatch(logout())})
            .catch((error) => console.log("Error in logout handler:", error))
    }

  return (
    <div>
        <button onClick={logoutHandler} className="text-white bg-gray-400 px-4 py-2 rounded-md font-bold hover:bg-gray-400/75">
            Logout
        </button>
    </div>
  )
}
