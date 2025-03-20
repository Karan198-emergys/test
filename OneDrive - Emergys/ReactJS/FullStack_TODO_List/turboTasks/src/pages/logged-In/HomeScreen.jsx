import React from "react";
import Sidebar from "../../components/navbar/sidebar";
import DashBoard from "./DashBoard";
import { Outlet } from "react-router-dom";
import TaskContextProvider from "../../context/provider/TaskContextProvider";

const HomeScreen = () => {
  return (
    <div className="flex gap-1">
      <div className="sticky w-[16vw]">
        <Sidebar />
      </div>
      <div className="w-[100vw]">
        <TaskContextProvider>
          <Outlet />
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default HomeScreen;
