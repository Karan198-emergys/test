import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext";

const SortTask = () => {
  const { sortTodoTask, fetchTasks, dueToggle, setSortValue, sortValue } =
    useContext(TaskContext);
  const sortingValue = (e) => {
    const { value } = e.target;
    let columnName, ordering;

    switch (value) {
      case "default":
        if (dueToggle) {
          return;
        }
        fetchTasks();
        setSortValue(value);
        break;
      case "titleAscending":
        columnName = "title";
        ordering = "ASC";
        sortTodoTask(columnName, ordering);
        setSortValue(value);
        break;
      case "titleDescending":
        columnName = "title";
        ordering = "desc";
        sortTodoTask(columnName, ordering);
        setSortValue(value);
        break;
      case "dateAscending":
        columnName = "due_date";
        ordering = "desc";
        sortTodoTask(columnName, ordering);
        setSortValue(value);
        break;
      case "dateDescending":
        columnName = "due_date";
        ordering = "asc";
        sortTodoTask(columnName, ordering);
        setSortValue(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className=" w-[70%] h-10">
      <select
        name="sorting"
        id="dateSorting"
        className="w-full  h-full border-2 outline-0 border-gray-300 rounded-lg focus:border-amber-300"
        onChange={sortingValue}
        value={sortValue}
      >
        <option value="default">Default</option>
        <option value="titleAscending">A to Z 🔼</option>
        <option value="titleDescending">Z to A 🔽</option>
        <option value="dateAscending">Date 🔼</option>
        <option value="dateDescending">Date 🔽</option>
      </select>
    </div>
  );
};

SortTask.propTypes = {};

export default SortTask;
