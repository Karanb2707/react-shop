import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/shoplogo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-evenly p-2 bg-red-700 drop-shadow-md drop-shadow-red-950">
      <NavLink to="/">
        <img src={Logo} className="h-10 rounded-md cursor-pointer transform hover:scale-105 duration-200" />
      </NavLink>

      <div className="flex flex-row items-center justify-evenly gap-6">
        <NavLink to="/">
          <p className="text-white text-[16px] font-semibold cursor-pointer transform hover:scale-115 duration-200">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <FaCartShopping className="text-white text-[16px] cursor-pointer transform hover:scale-115 duration-200" />
        </NavLink>
      </div>

    </div>
  )
}

export default Navbar