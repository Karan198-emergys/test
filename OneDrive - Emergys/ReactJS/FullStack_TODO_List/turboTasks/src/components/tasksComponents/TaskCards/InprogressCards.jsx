import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheckCircle,
  faFloppyDisk,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { TaskContext } from "../../../context/TaskContext";

const TodoCard = ({ inProgressTask }) => {
  const {
    deleteTask,
    markComplete,

    UpdateTodoTask,
  } = useContext(TaskContext);

  const [isEditOn, setIsEditing] = useState(false);

  // payload title, description

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: inProgressTask.title,
      description: inProgressTask.description,
    },
  });

  const onSubmit = (data, e) => {
    e?.preventDefault();
    UpdateTodoTask(inProgressTask.id, data);
    setIsEditing(false);
    reset({
      title: data.title,
      description: data.description,
    });
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div
      className={`w-full p-4 rounded-lg shadow-md bg-white flex flex-col gap-2 ${
        isEditOn ? "border-blue-400" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-md text-gray-500">
          {new Date(inProgressTask.due_date).toLocaleDateString()}
        </span>
        {!isEditOn && (
          <button
            type="button"
            className="text-red-600 text-xl hover:scale-110 cursor-pointer transition-transform"
            aria-label="Delete task"
            onClick={() => deleteTask(inProgressTask.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>

      {isEditOn ? (
        <form
          className=" flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" w-full">
            <input
              type="text"
              className=" w-[70%] border-2 p-1 border-gray-300 rounded-md focus:outline-amber-200"
              placeholder="Title to be Updated"
              {...register("title", {
                required: "required *",
                min: {
                  value: 3,
                  message: "Please Enter At least 3 Character",
                },
                pattern: {
                  value: /^[A-Za-z ]{1,20}$/,
                  message: "Invalid Title",
                },
              })}
            />
          </div>
          <div className=" w-full">
            <textarea
              name=""
              id=""
              className="p-1 w-[70%] focus:outline-amber-200 rounded-md max-h-10 min-h-10 border-2 border-gray-300"
              placeholder="Description to be Updated"
              {...register("description", {
                required: "required *",
                maxLength: {
                  value: 100,
                  message: "Max 100 characters allowed",
                },
              })}
            ></textarea>
          </div>{" "}
          <div className=" flex justify-end gap-2">
            <button
              type="submit"
              className=" cursor-pointer border-2 text-white hover:text-white border-gray-800 bg-gray-800 hover:border-amber-500 hover:bg-amber-500 pl-2 pr-2 rounded-md"
            >
              <FontAwesomeIcon icon={faFloppyDisk} /> save
            </button>{" "}
            <button
              type="button"
              className=" flex items-center gap-1 h-8 px-3 py-1 cursor-pointer bg-red-300 hover:bg-red-400 text-white rounded-lg text-sm transition"
              onClick={handleCancel}
            >
              <FontAwesomeIcon icon={faXmark} /> Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="text-lg text-blue-950 font-semibold">
            {inProgressTask.title}
          </div>

          <div className="text-gray-600 text-sm line-clamp-2">
            {inProgressTask.description}
          </div>

          <div className="flex gap-2 w-full justify-end">
            <button
              className="cursor-pointer border-2 text-white hover:text-white border-gray-800 bg-gray-800 hover:border-amber-500 hover:bg-amber-500 pl-2 pr-2 rounded-md"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              className="flex items-center gap-1 h-8 px-3 py-1 cursor-pointer bg-green-400 text-white rounded-lg text-sm hover:bg-green-500 transition"
              onClick={() => markComplete(inProgressTask.id)}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              Complete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoCard;
