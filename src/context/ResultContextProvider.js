import React, { useState, createContext, useContext } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export default function ResultContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [resultCount, setResultCount] = useState(1000);
  const [resultTime, setResultTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [changeResult, setChangeResult] = useState(false);

  const getResults = async (type) => {
    const resultTimer = setTimeout(() => {
      setResultTime(resultTime + 1);
    }, 1000);
    setIsLoading(true);
    const response = await fetch(`${baseUrl}/${type}/q=${searchQuery}&num=${resultCount}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();
    clearTimeout(resultTimer);
    setResults(data);
    setIsLoading(false);
    console.log(data);
  };

  const getBookResults = async () => {
    if (!searchQuery) return;
    try {
      const resultTimer = setTimeout(() => {
        setResultTime(resultTime + 1);
      }, 1000);
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=40&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      );
      const data = await response.json();

      if (data.error) throw new Error(data.error.message);

      clearTimeout(resultTimer);
      setResults(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        isLoading,
        searchQuery,
        changeResult,
        resultCount,
        resultTime,
        setResultCount,
        getResults,
        getBookResults,
        setSearchQuery,
        setChangeResult,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
}

export const useResultContext = () => useContext(ResultContext);
