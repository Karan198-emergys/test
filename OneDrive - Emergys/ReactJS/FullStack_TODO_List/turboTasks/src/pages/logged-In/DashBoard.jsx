import React from "react";
import TopBar from "../../components/navbar/topBar";
import TaskDashBoard from "../../components/tasksComponents/taskDashBoard";
import TaskFuncComp from "../../components/tasksComponents/TaskFuncComp";
import AddTaskForm from "../../components/tasksComponents/AddTaskForm";
import TaskView from "../../components/tasksComponents/TaskView/TaskView";
import { useLocation } from "react-router-dom";
import ListView from "./listView";
import UseTasks from "../../Hooks/UseTasks";

const DashBoard = () => {
  const location = useLocation();

  const { fetchTask } = UseTasks();

  return (
    <div className="flex flex-col">
      <TopBar />
      {location.pathname === "/addTask" && <AddTaskForm />}
      <TaskDashBoard />
      <TaskFuncComp />
      {location.pathname === "/listView" ? <ListView /> : <TaskView />}
    </div>
  );
};

export default DashBoard;
