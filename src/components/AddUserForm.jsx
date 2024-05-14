import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const AddUserForm = () => {
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form
        className="space-y-4 md:space-y-6"
        //    onSubmit={handleSubmit}
      >
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
              //   value={loginInfo?.username}
              //   onChange={handleChange}
              placeholder="Enter username"
              required
              className=" border border-gray-300 text-gray-900 sm:text-sm px-14 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
            />
            <PersonOutlineOutlinedIcon
              className="absolute top-2 left-2"
              //   onClick={togglePassword}
            />
            <span className="w-[1.5px] h-6 bg-gray-300 absolute top-2 left-10"></span>
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Subject
          </label>
          <div className="relative">
            <input
              //   type={showPassword ? "text" : "password"}
              type="text"
              name="subject"
              //   value={loginInfo?.password}
              //   onChange={handleChange}
              placeholder="subject"
              required
              className=" border border-gray-300 text-gray-900 px-14 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
            />

            <AssignmentOutlinedIcon className="absolute top-2 left-2" />
            <span className="w-[1.5px] h-6 bg-gray-300 absolute top-2 left-10"></span>
          </div>
        </div>

        <div>
          <label
            htmlFor="marks"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Marks
          </label>
          <div className="relative">
            <input
              //   type={showPassword ? "text" : "password"}
              type="text"
              name="marks"
              //   value={loginInfo?.password}
              //   onChange={handleChange}
              placeholder="Marks"
              required
              className=" border border-gray-300 text-gray-900 px-14 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
            />

            <BookmarkBorderOutlinedIcon className="absolute top-2 left-2" />
            <span className="w-[1.5px] h-6 bg-gray-300 absolute top-2 left-10"></span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            type="submit"
            className="w-[60%] m-auto  text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;