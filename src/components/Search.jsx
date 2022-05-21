import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useResultContext } from "../context/ResultContextProvider";

export const Search = () => {
  const { setSearchQuery, changeResult, setChangeResult } = useResultContext();
  return (
    <div className="flex items-center justify-center w-8/12">
      <div className=" flex flex-row flex-wrap items-stretch w-full   -">
        <input
          type="search"
          className="flex-auto min-w-0 block  px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none rounded-tl-lg rounded-bl-lg"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setChangeResult(true);
            }
          }}
        />
        <button
          className="btn px-6  bg-sky-600 text-white font-medium text-xs leading-tight uppercase  shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out flex items-center rounded-tr-lg rounded-br-lg "
          type="button"
          id="button-addon2"
          onClick={() => setChangeResult(!changeResult)}
        >
          <AiOutlineSearch size={18} />
        </button>
      </div>
    </div>
  );
};
