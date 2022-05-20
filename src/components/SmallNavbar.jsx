import React from "react";
import { Link, useLocation } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { BiImageAlt } from "react-icons/bi";
import { IoMdVideocam } from "react-icons/io";
import { BsNewspaper } from "react-icons/bs";

const links = [
  {
    name: "Search",
    path: "/search",
    icon: <BiSearch className=" text-gray-900 dark:text-gray-100" />,
  },
  {
    name: "Images",
    path: "/image",
    icon: <BiImageAlt className=" text-gray-900 dark:text-gray-100" />,
  },
  {
    name: "Videos",
    path: "/video",
    icon: <IoMdVideocam className=" text-gray-900 dark:text-gray-100" />,
  },
  {
    name: "News",
    path: "/news",
    icon: <BsNewspaper className=" text-gray-900 dark:text-gray-100" />,
  },
];

export const SmallNavbar = () => {
  const location = useLocation();

  return (
    <div className="flex items-center w-full">
      <ul className="flex flex-row gap-6 flex-wrap items-stretch w-full px-5">
        {links.map((link) => (
          <Link to={link.path} key={`nav-${link.name}`}>
            <li
              className={`flex flex-row gap-3 items-center py-2 text-base font-normal text-gray-700 border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none hover:border-b-2 hover:border-sky-500 hover:font-semibold ${
                location.pathname === link.path ? "border-b-2 border-sky-500 font-semibold" : ""
              }`}
            >
              <p className="text-gray-800 dark:text-gray-200">{link.name}</p>
              {link.icon}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
