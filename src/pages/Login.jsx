import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // this function is to  display the password to user
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // this function is used catch input data from login form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  // this function is used to submit user credentials
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = loginInfo;

    if (username === "admin" && password === "password") {
      dispatch(login(username));
      toast.success("successfully logged in");
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      toast.error("Invalid username or password ");
    }
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h3 className="text-red-500 text-[30px] font-bold mb-6">tailwebs</h3>
          <div className="w-full bg-white  shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Username
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      value={loginInfo?.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      required
                      className=" border border-gray-300 text-gray-900 sm:text-sm px-14 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    />

                    <PersonOutlineOutlinedIcon
                      className="absolute top-2 left-2"
                      onClick={togglePassword}
                    />
                    <span className="w-[1.5px] h-6 bg-gray-300 absolute top-2 left-10"></span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={loginInfo?.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className=" border border-gray-300 text-gray-900 px-14 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    />
                    <HttpsOutlinedIcon className="absolute top-2 left-2" />

                    {showPassword ? (
                      <VisibilityOffOutlinedIcon
                        className="absolute top-2 right-4"
                        onClick={togglePassword}
                      />
                    ) : (
                      <RemoveRedEyeOutlinedIcon
                        className="absolute top-2 right-4"
                        onClick={togglePassword}
                      />
                    )}
                    <span className="w-[1.5px] h-6 bg-gray-300 absolute top-2 left-10"></span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex items-center justify-center mt-12">
                  <button
                    type="submit"
                    className="w-[60%] m-auto  text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center"
                  >
                    Login in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer toastClassName="fixed top-[11.5%] z-99 bottom-[10%] right-[8%] bg-yellow-300 text-white" />
      </section>
    </>
  );
};

export default Login;
