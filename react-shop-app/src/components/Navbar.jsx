import { FaCartShopping } from "react-icons/fa6";
import Logo from "../assets/shoplogo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className="flex flex-row items-center justify-evenly p-2 bg-red-700 drop-shadow-md drop-shadow-red-950">
      <NavLink to="/">
        <img src={Logo} className="h-10 rounded-md cursor-pointer transform hover:scale-105 duration-200" />
      </NavLink>

      <div className="flex flex-row items-center justify-evenly gap-6">
        <NavLink to="/">
          <p className="text-white text-[22px] font-semibold cursor-pointer transform hover:scale-115 duration-200">Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="flex items-center">
            <FaCartShopping className="text-white text-[22px] cursor-pointer transform hover:scale-115 duration-200 relative" />
            {
              cart.length > 0 &&
              <div className="absolute ml-5 mb-4 h-4 w-4 rounded-full bg-white text-center text-[10px] font-bold">
                <span>{cart.length}</span>
              </div>
            }
          </div>
        </NavLink>
      </div>

    </div>
  )
}

export default Navbar