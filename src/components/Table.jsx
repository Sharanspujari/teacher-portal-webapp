import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useSelector } from "react-redux";
const studentData = [
  {
    id: 0,
    name: "Ashok",
    subject: "Chemistry",
    marks: 75,
  },
  {
    id: 1,
    name: "Ashok",
    subject: "Chemistry",
    marks: 75,
  },
  {
    id: 2,
    name: "Ashok",
    subject: "Chemistry",
    marks: 75,
  },
  {
    id: 3,
    name: "Ashok",
    subject: "Chemistry",
    marks: 75,
  },
  {
    id: 4,
    name: "Ashok",
    subject: "Chemistry",
    marks: 75,
  },
];
const Table = () => {
  const [isOpenAction, setisOpenAction] = useState(-1);

  // this function is used to open action button for particular table data
  const toggleActionBtn = (id) => {
    setisOpenAction(isOpenAction === id ? -1 : id);
  };

  // getting list student from redux store using useSelector
  const students = useSelector((state) => state.studentInfo.studentsList);

  return (
    <div className="relative overflow-x-auto px-10 py-4  sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs  border-b text-gray-400  bg-white ">
          <tr>
            <th scope="col" className="px-6 py-4 border-r ">
              Name
            </th>
            <th scope="col" className="px-6 py-4 border-r">
              Subject
            </th>
            <th scope="col" className="px-6 py-4 border-r">
              Marks
            </th>
            <th scope="col" className="px-6 py-4 border-r">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, i) => {
            return (
              <tr
                key={student.id}
                className="bg-white text-gray-700 font-semibold border-b "
              >
                <td className="px-6 py-5 flex items-center gap-4">
                  <span className=" w-8 h-8 uppercase rounded-full flex items-center justify-center bg-blue-400 text-white">
                    {student.name.slice(0, 1)}
                  </span>
                  {student.name}
                </td>
                <td className="px-6 py-5">{student.subject}</td>
                <td className="px-6 py-5">{student.marks}</td>
                <td className="px-6 py-6 relative  ">
                  <div
                    onClick={() => toggleActionBtn(student.id)}
                    className="w-[16px]  h-[16px] flex items-center justify-center cursor-pointer rounded-full bg-black"
                  >
                    <ArrowDropDownOutlinedIcon className="text-white" />
                  </div>
                  {isOpenAction === student.id && (
                    <div className="w-[60px] absolute top-11 left-1 text-[14px] border flex flex-col items-start px-3 h-auto bg-white rounded shadow-xl">
                      <span className="cursor-pointer text-[13px]">Edit</span>
                      <span className="cursor-pointer text-[13px]">Delete</span>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
