// Style Imports

// React Imports
import React, { useState } from "react";

// External Libraries

// Internal Imports
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className=" bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes darkTheme={darkTheme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
