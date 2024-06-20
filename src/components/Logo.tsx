// import LogoIamge from "../assets/logo.png"

export default function Logo({className}) {
  return (
    <div>
        <h1 className={`text-xl text-white font-bold pl-2 ${className}`}>Snap Post</h1>
        {/* <img className="w-16 pl-2" src={LogoIamge} alt="Logo Image" />   */}
    </div>
  )
}
