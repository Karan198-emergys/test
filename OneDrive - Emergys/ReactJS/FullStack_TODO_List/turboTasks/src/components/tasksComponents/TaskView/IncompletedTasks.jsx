import React, { useContext } from "react";
import InprogressCards from "../TaskCards/InprogressCards";
import { TaskContext } from "../../../context/TaskContext";

const IncompletedTasks = () => {
  const { dueToggle, inProgressTask } = useContext(TaskContext);

  return (
    <>
      {inProgressTask.length < 1 ? (
        <div className=" p-25 pb-20 text-3xl text-gray-400 cursor-context-menu">
          {dueToggle ? "No Task are Over Due" : "No Task To Do"}
        </div>
      ) : (
        <div className=" h-[54vh] flex flex-col gap-2">
          {inProgressTask.map((task) => (
            <InprogressCards key={task.id} inProgressTask={task} />
          ))}
        </div>
      )}
    </>
  );
};

export default IncompletedTasks;
