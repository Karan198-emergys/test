import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchComp = () => {
  const { searchTodoTask, search, setSearch, setSortValue } =
    useContext(TaskContext);
  const searchValue = (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      setSortValue("default");
    }
    setSearch(value);
    searchTodoTask(value);
  };
  return (
    <div className=" w-[100%] h-10 flex justify-center items-center p-2 hover:border-amber-300  rounded-lg border-gray-300 border-2">
      <input
        type="text"
        name="search"
        className="outline-none w-[100%] h-[100%]"
        placeholder="Search Task here"
        value={search}
        onChange={searchValue}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="p-1 text-xl text-gray-600"
      />
    </div>
  );
};

export default SearchComp;
