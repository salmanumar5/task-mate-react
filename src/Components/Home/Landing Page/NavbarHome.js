import { CiMenuBurger, } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
// import { LiaVrCardboardSolid } from "react-icons/lia";
import { navItems } from "../../../Constants/ListItems";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";



const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            {/* <img className="h-10 w-10 mr-2" src={logo} alt="Logo" /> */}
            <div className="bg-purple-500 w-8 h-8 rounded-md flex items-center justify-center text-2xl">
              <FaTasks />
            </div>
            {/* <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-2xl">
              <LiaVrCardboardSolid />
            </div> */}
            <span className="text-xl tracking-tight ml-2 text-white">Task Mate</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to={'/login'} className="py-2 px-3 border rounded-md text-white">
              Sign In
            </Link>
            <Link
              to={'/signup'}
              className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md text-white"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <RxCross1 /> : <CiMenuBurger />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link className="py-2 px-3 border rounded-md">
                Sign In
              </Link>
              <Link
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
