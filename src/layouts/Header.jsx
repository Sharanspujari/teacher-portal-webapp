import React from "react";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Asking user for logout confirmation through this function
  const logOutFunc = () => {
    if (window.confirm("Are you sure you want to logout ?")) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <header className="fixed w-full z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/home" className="flex items-center">
            <span className="self-center text-red-600 text-xl font-semibold whitespace-nowrap ">
              tailwebs
            </span>
          </Link>

          <ul className="flex  items-center lg:order-2">
            <li>
              <Link
                to="/home"
                className="text-gray-800 font-bold  hover:bg-gray-100 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
              >
                Home
              </Link>
            </li>

            <li onClick={logOutFunc}>
              <Link className="text-gray-800 font-bold bg-primary-700 hover:bg-gray-100 hover:text-red-600 font-medium rounded-lg  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                Logout
              </Link>
            </li>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100  "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <MenuOutlinedIcon />
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
