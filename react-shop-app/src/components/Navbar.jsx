import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/shoplogo.png"

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-evenly p-2 bg-red-700 drop-shadow-md drop-shadow-red-950">
        <img src={Logo} className="h-10 rounded-md cursor-pointer transform hover:scale-105 duration-100" />

        <div className="flex flex-row items-center justify-evenly gap-6">
          <p className="text-white text-[16px] font-semibold cursor-pointer transform hover:scale-115 duration-100">Home</p>
          <FaCartShopping className="text-white text-[16px] cursor-pointer transform hover:scale-115 duration-100"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar