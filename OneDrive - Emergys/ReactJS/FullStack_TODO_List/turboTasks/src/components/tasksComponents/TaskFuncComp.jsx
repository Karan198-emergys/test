import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchComp from "../../FucntinalComponents.jsx/SearchComp";
import SortTask from "../../FucntinalComponents.jsx/SortTask";
import OverDue from "../../FucntinalComponents.jsx/OverDue";

const TaskFuncComp = () => {
  const location = useLocation();

  return (
    <div className=" flex w-full mt-4 justify-between taskDashBoard shadow-sm border-amber-200   p-2">
      <div className="taskView flex text-2xl font-medium w-[26%] justify-center  text-blue-950  items-center">
        <Link
          to="/"
          className={`cursor-pointer ${
            location.pathname === "/"
              ? "border-b-2 h-full border-gray-800 cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          Board's View
        </Link>
        {/* <div className="h-full">|</div>
        <Link
          to="/listView"
          className={`cursor-pointer h-full ${
            location.pathname === "/listView"
              ? "border-b-2 h-full border-gray-800 cursor-pointer"
              : "cursor-pointer"
          }`}
        >
          List View
        </Link> */}
      </div>
      <div className=" flex h-full justify-end gap-2 w-1/2">
        <div className=" w-40">
          <OverDue />
        </div>
        <div className="">
          <SearchComp />
        </div>
        <div className="w-[35%]">
          <div className=" pr-11">
            <SortTask />
          </div>
        </div>
      </div>
    </div>
  );
};
TaskFuncComp.propTypes = {
  sortTodoTask: PropTypes.func,
  searchTodoTask: PropTypes.func,
  overDueTasks: PropTypes.func,
};

export default TaskFuncComp;
