import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              {/* <img 
              src="https://c0.klipartz.com/pngpicture/808/529/gratis-png-pala-pala-rastrilla-logo-pala.png"
              alt="logo"
            /> */}
              <span className="text-slate-500">Palas</span>
              <span className="text-slate-800">Estate</span>
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            ></input>
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4 font-medium text-lg">
            <Link to="/profile">
              <li className="hidden sm:inline text-slate-800 hover:underline">
                Profile
              </li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline text-slate-800 hover:underline">
                About
              </li>
            </Link>
            <Link to="/sign-in">
              <li className=" text-slate-800 hover:underline">Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
