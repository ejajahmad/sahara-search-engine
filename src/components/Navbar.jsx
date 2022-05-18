import React from "react";

import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Search } from "./Search";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className=" p-5  flex flex-wrap justify-center align-middle sm:justify-between">
      <div className="flex justify-between items-center w-screen">
        <Link to="/">
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Sahara</p>
        </Link>

        <Search />

        <button
          className=" bg-gray-900  text-gray-200 dark:bg-gray-100  dark:text-gray-800 px-2 py-[5px] rounded drop-shadow-md"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? (
            <span className="flex flex-row items-center gap-2">
              <MdLightMode /> Light Mode
            </span>
          ) : (
            <span className="flex flex-row items-center gap-2">
              <MdDarkMode /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
