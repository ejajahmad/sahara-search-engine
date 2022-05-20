import React from "react";
import { ErrorPage } from "./ErrorPage";

export const SearchResults = ({ results, resultTime }) => {
  return (
    <div className="flex flex-wrap overflow-hidden px-5">
      {results && results?.results?.length > 0 && (
        <p>
          About {results?.results?.length} results in {resultTime} seconds
        </p>
      )}
      {results && results?.results?.length > 0 ? (
        results?.results?.map(({ link, title, description, cite }, i) => (
          <div className="w-full overflow-hidden my-5 " key={`search-result-${i + 1}`}>
            <small className=" text-gray-900 dark:text-gray-50">{cite.domain}</small>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-bold  text-sky-600 ">{title}</h3>
            </a>
            <p className=" text-lg  text-gray-900 dark:text-gray-50">{description}</p>
          </div>
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};
