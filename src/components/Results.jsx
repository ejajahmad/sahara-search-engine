import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";
import { SearchResults } from "./ResultsPages/SearchResults";
import { ImageResults } from "./ResultsPages/ImageResults";
import { VideoResults } from "./ResultsPages/VideoResults";
import { NewsResults } from "./ResultsPages/NewsResults";
import { BookResults } from "./ResultsPages/BookResults";

export const Results = () => {
  const { results, isLoading, getResults, getBookResults, changeResult, resultTime } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/books") {
      getBookResults();
    } else {
      getResults(location.pathname.slice(1));
    }
  }, [changeResult, location]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return <SearchResults results={results} resultTime={resultTime} />;
    case "/image":
      return <ImageResults results={results} />;

    case "/video":
      return <VideoResults results={results} />;
    case "/news":
      return <NewsResults results={results} />;
    case "/books":
      return <BookResults results={results} />;
    default:
      return <p>Results</p>;
  }
};
