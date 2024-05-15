import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/studentInfoSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SyncLoader } from "react-spinners";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({
    name: "",
    subject: "",
    marks: "",
  });
  const [loader, setLoader] = useState(false);

  //this function is used to get student info from  input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  //this function is used to validate condition for adding student details
  const validateStudentInfo = () => {
    if (studentData.name.length < 2) {
      toast.error("Name must be at least 2 character");
      return false;
    }
    if (studentData.subject.length < 2) {
      toast.error("Subject must be at least 2 character");
      return false;
    }
    if (
      isNaN(studentData.marks) ||
      studentData.marks < 0 ||
      studentData.marks > 100
    ) {
      toast.error("Marks must be a number between 0 and 100.");
      return false;
    }
    return true;
  };

  // this function is used to add students details to redux store
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStudentInfo()) {
      return;
    }
    setLoader(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoader(false);
      dispatch(addStudent(studentData));
      setStudentData({
        name: "",
        subject: "",
        marks: "",
      });
      toast.success("Student added successfully");
    } catch (error) {
      toast.error(error);
      setLoader(false);
    }
  };

  return (
    <>
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
                name="name"
                value={studentData?.name}
                onChange={handleChange}
                placeholder="Enter name"
                required
                className=" border border-gray-300 text-gray-900 sm:text-sm px-14 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
              />
              <PersonOutlineOutlinedIcon className="absolute top-2 left-2" />
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
                type="text"
                name="subject"
                value={studentData?.subject}
                onChange={handleChange}
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
                type="number"
                name="marks"
                value={studentData?.marks}
                onChange={handleChange}
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
      <ToastContainer toastClassName="fixed top-[9.5%] z-99 bottom-[50%] right-[8%] bg-yellow-300 text-white" />
      {loader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <SyncLoader color="white" size={15} />
        </div>
      )}
    </>
  );
};

export default AddUserForm;
