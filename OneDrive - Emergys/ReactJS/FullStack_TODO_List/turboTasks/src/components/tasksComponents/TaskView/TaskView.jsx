import PropTypes from "prop-types";
import React, { useContext } from "react";
import IncompletedTasks from "./IncompletedTasks";
import CompletedTasks from "./CompletedTasks";
import { TaskContext } from "../../../context/TaskContext";

const TaskView = () => {
  const { inProgressTask, completedTask, dueToggle } = useContext(TaskContext);

  return (
    <div className="flex gap-12 w-full justify-center mt-8">
      <div className="w-[40%] flex flex-col gap-2 items-center shadow-md border-amber-50 rounded-lg bg-gray-100 p-4">
        <div className="flex items-center text-xl w-full justify-between pb-2 border-b border-gray-300">
          <span className="font-semibold cursor-context-menu">
            {dueToggle ? "OverDue Task" : " Pending Task"}
          </span>
          <span className="flex justify-center items-center h-10 w-10 bg-white text-gray-700 font-semibold rounded-full shadow-sm">
            {inProgressTask.length}
          </span>
        </div>
        <div className="w-[100%] p-1 scroll-pl-8 overflow-hidden hover:overflow-y-auto overflow-x-hidden">
          <IncompletedTasks />
        </div>
      </div>

      <div className="w-[40%] flex flex-col gap-2 items-center shadow-md border-amber-50 rounded-lg bg-gray-100 p-4">
        <div className="flex items-center text-xl w-full justify-between pb-2 border-b border-gray-300">
          <span className="font-semibold cursor-context-menu">
            Completed Tasks
          </span>
          <span className="flex justify-center items-center h-10 w-10 bg-white text-gray-700 font-semibold rounded-full shadow-sm">
            {completedTask.length}
          </span>
        </div>
        <div className="w-[100%] p-1 scroll-px-8  overflow-hidden hover:overflow-y-auto overflow-x-hidden">
          <CompletedTasks />
        </div>
      </div>
    </div>
  );
};
TaskView.propTypes = {
  markComplete: PropTypes.func,
  inProgressTask: PropTypes.array,
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  markInComplete: PropTypes.func,
  completedTask: PropTypes.array,
  UpdateTodoTask: PropTypes.func,
  fetchTasks: PropTypes.func,
  dueToggle: PropTypes.bool,
};

export default TaskView;
