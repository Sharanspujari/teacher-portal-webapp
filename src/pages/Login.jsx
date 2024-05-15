import React, { useState, useCallback } from "react";
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
import { SyncLoader } from "react-spinners";

const USERNAME = "admin";
const PASSWORD = "Password@123";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  console.log("loginInfo: ", loginInfo);
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // this function is to  display the password to user
  const togglePassword = useCallback(() => {
    setShowPassword((prevshowPassword) => !prevshowPassword);
  }, []);

  // this function is used catch input data from login form

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setLoginInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }, []);

  // this function is to validate user credentials
  const validateCredentials = useCallback(() => {
    const { username, password } = loginInfo;
    const userNameRegex = /^[a-zA-Z0-9]{3,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

    if (!userNameRegex.test(username)) {
      toast.error(
        "Username should be atleast 3 character long and contain only letters and numbers "
      );
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should be at least 8 characters long, contain one uppercase letter, and one special character"
      );
      return false;
    }

    return true;
  }, [loginInfo]);

  // this function is used to submit user credentials
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      // this condition used to check whether the username and password meets criteria or not
      if (!validateCredentials()) {
        return;
      }
      setLoader(true);
      const { username, password } = loginInfo;
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoader(false);

        // USEENAME and PASSWORD defined above the componet using these values validating credentials
        if (username === USERNAME && password === PASSWORD) {
          dispatch(login(username));

          // Making delay for login process
          toast.success("successfully logged in");
          await new Promise((resolve) => setTimeout(resolve, 1500));
          navigate("/home");
        } else {
          toast.error("Invalid username or password ");
          setLoader(false);
        }
      } catch (error) {
        toast.error("An error occurred");
        setLoader(false);
      }
    },
    [loginInfo, validateCredentials, dispatch, navigate]
  );

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
                    className="block mb-2 text-sm font-medium text-gray-900 "
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
                    className="text-sm font-medium text-blue-600 hover:underline "
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex items-center justify-center mt-12">
                  <button
                    type="submit"
                    className="w-[60%] m-auto  text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer toastClassName="fixed top-[11.5%] z-99 bottom-[10%] right-[8%] bg-yellow-300 text-white" />
        {loader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <SyncLoader color="white" size={15} />
          </div>
        )}
      </section>
    </>
  );
};

export default Login;
