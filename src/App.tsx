import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"
// import Button from "./components/Button"
// import Login from "./components/Login"

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      {/* < Footer/> */}
    </>
  )
}

export default App
