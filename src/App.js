// Style Imports

// React Imports
import React, { useState } from "react";

// External Libraries

// Internal Imports
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { SmallNavbar } from "./components/SmallNavbar";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`${darkTheme ? "dark bg-gray-900" : "bg-gray-100"} `}>
      <div className="  dark:text-gray-200 min-h-screen max-w-7xl overflow-x-hidden bg-gray-100 dark:bg-gray-900 ">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <SmallNavbar />
        <Routes darkTheme={darkTheme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
