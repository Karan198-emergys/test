import React, { useState } from "react";
import { axiosInstance } from "../services/Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [inProgressTask, setInProgressTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [dueToggle, setDueToggle] = useState(false);
  const [search, setSearch] = useState("");
  const [overdueTodo, setOverDueTodo] = useState([]);
  const [sortValue, setSortValue] = useState("default");

  const toNavigate = useNavigate();

  const fetchCompletedTask = async () => {
    const response = await axiosInstance.get("/task/getTasks");
    const todoTask = response.data.data;
    setCompletedTask(todoTask.filter((task) => task.status === "complete"));
  };
  const fetchTasks = async () => {
    try {
      const response = await axiosInstance.get("/task/getTasks");
      const todoTask = response.data.data;
      setTasks(todoTask);
      setInProgressTask(
        todoTask.filter((task) => task.status === "incomplete")
      );
      setCompletedTask(todoTask.filter((task) => task.status === "complete"));
    } catch (error) {
      toast.error("Error fetching the Tasks", error, {
        position: "top-center",
      });
      console.error("Error fetching the Tasks", error);
      toNavigate("/login");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axiosInstance.delete(`/task/deleteTask/${taskId}`);
      fetchTasks();
    } catch (error) {
      console.error("Cannot Delete the Task", error);
      toast.error("Cannot Delete the Task", error, {
        position: "top-center",
      });
    }
  };

  const markComplete = async (taskId) => {
    try {
      await axiosInstance.patch(`/task/updateStatus/${taskId}`, {
        status: "complete",
      });
      if (dueToggle) {
        overDueTasks();
        return;
      }
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("can't mark as complete", error, {
        position: "top-center",
      });
    }
  };

  const markInComplete = async (taskId) => {
    try {
      await axiosInstance.patch(`/task/updateStatus/${taskId}`, {
        status: "incomplete",
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Can't mark as in-complete", error, {
        position: "top-center",
      });
    }
  };

  const UpdateTodoTask = async (taskId, payload) => {
    try {
      await axiosInstance.put(`/task/updateTask/${taskId}`, payload);
      fetchTasks();
      toast.success("Your Task Updated successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.response?.data?.message ?? "Error updating task", {
        position: "top-center",
      });
      console.error("Cannot update the Specific Cards", error);
    }
  };

  const sortTodoTask = async (columnName, param) => {
    try {
      const response = await axiosInstance.get(
        `/task/sortTask/${columnName}/${param}`
      );
      const todoTask = response.data.data;
      setTasks(todoTask);
      if (dueToggle) {
        if (search.length > 0) {
          setInProgressTask(
            overdueTodo.filter(
              (task) =>
                task.status === "incomplete" &&
                (task.title.includes(search) ||
                  task.description.includes(search))
            )
          );
        }
        return;
      }
      if (search.length > 0) {
        setInProgressTask(
          todoTask.filter(
            (task) =>
              task.status === "incomplete" &&
              (task.title.includes(search) || task.description.includes(search))
          )
        );
        setCompletedTask(
          todoTask.filter(
            (task) =>
              task.status === "complete" &&
              (task.title.includes(search) || task.description.includes(search))
          )
        );
      } else {
        setInProgressTask(
          todoTask.filter((task) => task.status === "incomplete")
        );
        setCompletedTask(todoTask.filter((task) => task.status === "complete"));
      }
    } catch (error) {
      console.error("Can't sort the Task", error);
      toast.error("Can't sort the Task", error, {
        position: "top-center",
      });
    }
  };

  const searchTodoTask = (keyword) => {
    const SearchString = keyword.toLowerCase();
    if (!keyword && !dueToggle) {
      setSortValue("default");
      fetchTasks();
      return;
    }
    if (dueToggle && !keyword) {
      setSortValue("default");
      overDueTasks();
      fetchCompletedTask();
      return;
    }
    if (dueToggle) {
      setInProgressTask(
        overdueTodo.filter(
          (task) =>
            task.status === "incomplete" &&
            (task.title.toLowerCase().includes(SearchString) ||
              task.description.toLowerCase().includes(SearchString))
        )
      );
      setCompletedTask(
        completedTask.filter(
          (task) =>
            task.status === "complete" &&
            (task.title.includes(SearchString) ||
              task.description.includes(SearchString))
        )
      );
      return;
    }
    setInProgressTask(
      tasks.filter(
        (task) =>
          task.status === "incomplete" &&
          (task.title.toLowerCase().includes(SearchString) ||
            task.description.toLowerCase().includes(SearchString))
      )
    );
    setCompletedTask(
      tasks.filter(
        (task) =>
          task.status === "complete" &&
          (task.title.includes(SearchString) ||
            task.description.includes(SearchString))
      )
    );
  };

  const overDueTasks = async () => {
    const response = await axiosInstance.get(
      "task/filterTasks/?due_date=overdue"
    );
    const overDueTodoTask = response.data.data;
    if (overDueTodoTask.length === 0) {
      toast.info("Congratulation 🎉 🎊 👏 ,  no tasks are over due", {
        position: "top-center",
      });
    }
    setTasks(overDueTodoTask);
    setInProgressTask(
      overDueTodoTask.filter((task) => task.status === "incomplete")
    );
    setOverDueTodo(
      overDueTodoTask.filter((task) => task.status === "incomplete")
    );
  };

  return {
    tasks,
    fetchTasks,
    deleteTask,
    markComplete,
    markInComplete,
    inProgressTask,
    completedTask,
    sortTodoTask,
    searchTodoTask,
    UpdateTodoTask,
    overDueTasks,
    dueToggle,
    setDueToggle,
    search,
    setSearch,
    overdueTodo,
    setSortValue,
    sortValue,
  };
};

export default UseTasks;
