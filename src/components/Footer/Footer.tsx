import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#52796F] text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
            <Link to='/' className="text-white hover:text-gray-400 mx-2">Home</Link>
          <Link to='/about' className="text-white hover:text-gray-400 mx-2">About</Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Snap Post. All rights reserved.</p>
      </div>
    </footer>
  )
}