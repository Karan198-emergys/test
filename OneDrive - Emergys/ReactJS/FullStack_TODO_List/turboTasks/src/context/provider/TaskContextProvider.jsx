import React, { useEffect, useMemo } from "react";
import { TaskContext } from "../TaskContext";
import UseTasks from "../../Hooks/UseTasks";

const TaskContextProvider = ({ children }) => {
  const {
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
    setSortValue,
    sortValue,
  } = UseTasks();

  useEffect(() => {
    fetchTasks();
  }, []);

  const memoizedValue = useMemo(
    () => ({
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
      setSortValue,
      sortValue,
    }),
    [
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
      setSortValue,
      sortValue,
    ]
  );

  return (
    <TaskContext.Provider value={memoizedValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
