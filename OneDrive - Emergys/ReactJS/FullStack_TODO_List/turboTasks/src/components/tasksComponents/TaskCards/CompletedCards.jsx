import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { TaskContext } from "../../../context/TaskContext";

const CompletedCards = ({ completedTask }) => {
  const { deleteTask, markInComplete } = useContext(TaskContext);
  return (
    <div className="w-full p-4 border-amber-50 rounded-lg shadow-md bg-pink-50 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-md text-red-400">
          {new Date(completedTask.due_date).toLocaleDateString()}
        </span>
        <button
          type="button"
          className="text-red-600 text-xl hover:scale-110 cursor-pointer transition-transform"
          aria-label="Delete task"
          onClick={() => deleteTask(completedTask.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      <div className="text-lg text-blue-950 font-semibold">
        {completedTask.title}
      </div>

      <div className="text-gray-600 text-sm line-clamp-2 ">
        {completedTask.description}
      </div>

      <div className="flex w-full justify-end">
        <button
          className="flex items-center gap-1 h-8 px-3 py-1 cursor-pointer bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
          onClick={() => markInComplete(completedTask.id)}
        >
          <FontAwesomeIcon icon={faRotateLeft} />
          Undo
        </button>
      </div>
    </div>
  );
};

CompletedCards.propTypes = {};

export default CompletedCards;
