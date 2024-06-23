import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAppDispatch } from "./store/hooks"
import { login, logout } from "./store/authSlice"
import authService from "./appwrite/auth"
// import Button from "./components/Button"
// import Login from "./components/Login"


function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    })
    .catch((error) => {
      console.log("Error getting current user:", error);
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet/>
        </main>
        < Footer/>
      </div>
    </div>
  ) : null;
}

export default App
