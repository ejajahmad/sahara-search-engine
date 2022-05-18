import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export default function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}?q=${searchQuery}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": "41a03cd16emsh2f065dde06e5eabp1a13cdjsn698dbd69e0a0",
      },
    });

    const data = await response.json();
    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider value={{ results, isLoading, searchQuery, getResults, setSearchQuery }}>
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext = () => useContext(ResultContext);
