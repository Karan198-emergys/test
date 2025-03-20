import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { axiosInstance } from "../../services/Api/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TaskContext } from "../../context/TaskContext";
import UseTasks from "../../Hooks/UseTasks";

const AddTaskForm = () => {
  const { fetchTasks } = useContext(TaskContext);

  const { updateTodoTask } = UseTasks();

  const toNavigate = useNavigate();

  const nowDateTime = new Date();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitTask = async (data) => {
    const payLoad = {
      title: data.title,
      due_date: data.dueDate,
      description: data.description,
    };

    try {
      await axiosInstance.post("/task/createTask", payLoad);
      fetchTasks();
      toast.success("Task added successfully");
      toNavigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message ?? "Task not added");
    }
  };

  const onSubmit = (data) => {
    if (!data) {
      return;
    }
    submitTask(data);
  };

  return (
    <div className="absolute h-[72vh] w-[50vw] left-[30%] flex top-18 shadow-2xl border-gray-100 p-6 border-2 rounded-2xl bg-gray-50  justify-center">
      <div className="w-full ">
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <span className="text-3xl font-semibold text-gray-800">Add Task</span>
          <Link
            className="text-gray-600 hover:text-red-600 cursor-pointer text-2xl font-bold transition-all"
            // onClick={() => setShowAddForm(false)}
            to="/"
          >
            ✕
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 items-center mt-6"
        >
          <div className="w-[100%]">
            {errors.title && (
              <p className="text-red-500 text-md  mt-1 pr-1 w-full flex justify-end">
                {errors.title.message}
              </p>
            )}
            <input
              type="text"
              className="w-full text-lg rounded-lg border-2 border-gray-300 focus:border-amber-500 outline-none p-3 bg-white"
              placeholder="Enter Task Title"
              {...register("title", {
                required: "Please enter a Title",
                min: {
                  value: 3,
                  message: "Please Enter At least 3 Character",
                },
                pattern: {
                  value: /^[A-Za-z ]{1,20}$/,
                  message:
                    "Please enter valid title ( doesn't contain symbol / special character)",
                },
              })}
            />
          </div>

          <div className="w-[100%]">
            {errors.dueDate && (
              <p className="text-red-500 text-md mt-1 pr-1 w-full flex justify-end">
                {errors.dueDate.message}
              </p>
            )}
            <input
              type="date"
              className="w-full text-lg rounded-lg border-2 border-gray-300 focus:border-amber-500 outline-none p-3 text-gray-700 bg-white"
              {...register("dueDate", {
                required: "Please enter the Due Date",
              })}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="w-[100%]">
            {errors.description && (
              <p className="text-red-500 text-md mt-1 pr-1 w-full flex justify-end">
                {errors.description.message}
              </p>
            )}
            <textarea
              className="w-full text-lg rounded-lg border-2 border-gray-300 focus:border-amber-500 outline-none p-3 text-gray-700 bg-white h-32 resize-none"
              placeholder="Enter Task Description"
              {...register("description", {
                required: "Please enter a description",
                maxLength: {
                  value: 100,
                  message: "Max 100 characters allowed",
                },
              })}
            ></textarea>
          </div>

          <div className="w-[90%] flex justify-end">
            <button
              type="submit"
              className="border-2 w-[30%] bg-gray-700 hover:bg-amber-400 hover:border-amber-400 rounded-lg text-white font-semibold text-[1.2rem] p-2 flex justify-center items-center cursor-pointer "
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddTaskForm.propTypes = {
  setShowAddForm: PropTypes.func,
};

export default AddTaskForm;
