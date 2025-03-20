import React, { useContext } from "react";
import PropTypes from "prop-types";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskContext } from "../context/TaskContext";

const OverDue = () => {
  const {
    fetchTasks,
    overDueTasks,
    setDueToggle,
    dueToggle,
    setSearch,
    setSortValue,
  } = useContext(TaskContext);

  const overDueHandler = () => {
    setSearch("");
    setSortValue("default");
    overDueTasks();
    setDueToggle(true);
  };

  const pendingTaskHandler = () => {
    setSearch("");
    setSortValue("default");
    fetchTasks();
    setDueToggle(false);
  };

  return (
    <>
      {dueToggle ? (
        <div className="w-[100%] h-full ">
          <button
            className=" w-[100%] flex items-center justify-center gap-4 h-full border-2 rounded-lg border-gray-300 focus:border-amber-300 cursor-pointer text-lg"
            onClick={pendingTaskHandler}
          >
            Pending{" "}
            <FontAwesomeIcon
              icon={faFilter}
              className=" text-2xl text-gray-600"
            />
          </button>
        </div>
      ) : (
        <div className="w-[100%] h-full ">
          <button
            className=" w-[100%] flex items-center justify-center gap-4 h-full border-2 rounded-lg border-gray-300 focus:border-amber-300 cursor-pointer"
            onClick={overDueHandler}
          >
            Over Due{" "}
            <FontAwesomeIcon
              icon={faFilter}
              className=" text-2xl text-gray-600"
            />
            {/* <span className=" h-3/4 w-[20%] border-0 shadow-lg bg-red-200 rounded-4xl">
              {" "}
              2{" "}
            </span> */}
          </button>
        </div>
      )}
    </>
  );
};

OverDue.propTypes = {
  overDueTasks: PropTypes.func,
};

export default OverDue;
