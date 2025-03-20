import React, { useContext } from "react";
import CompletedCards from "../TaskCards/CompletedCards";
import { TaskContext } from "../../../context/TaskContext";

const CompletedTasks = () => {
  const { completedTask } = useContext(TaskContext);
  return (
    <>
      {completedTask.length < 1 ? (
        <div className=" p-25 pb-20 text-3xl text-gray-400 cursor-context-menu">
          No Task Completed
        </div>
      ) : (
        <div className=" h-[54vh] flex flex-col gap-2">
          {completedTask.map(
            (task) =>
                <CompletedCards key={task.id} completedTask={task} />
          )}
        </div>
      )}
    </>
  );
};

export default CompletedTasks;
