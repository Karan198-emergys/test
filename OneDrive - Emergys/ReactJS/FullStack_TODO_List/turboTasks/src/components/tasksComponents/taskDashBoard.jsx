import React from "react";
import AddTaskForm from "./AddTaskForm";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";

const CustomLink = ({ children, className, to }) => {
  return (
    <Link
      className={`border-2 w-[70%] bg-gray-700 hover:bg-amber-400 hover:border-amber-400 rounded-lg text-white font-medium text-[1.2rem] p-3 text-2xl flex justify-center items-center cursor-pointer ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};

const TaskDashBoard = () => {
  return (
    <div className="taskDashBoard flex justify-end m-4 border-amber-100">
      <div className=" w-[22%] pr-3">
        <CustomLink to="/addTask">Add Task</CustomLink>
      </div>
    </div>
  );
};

TaskDashBoard.propTypes = {
  setShowAddForm: PropTypes.func,
};

export default TaskDashBoard;
