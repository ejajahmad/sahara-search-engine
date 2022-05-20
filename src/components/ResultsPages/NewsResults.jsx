import React from "react";
import { ErrorPage } from "./ErrorPage";

export const NewsResults = ({ results }) => {
  return (
    <div className="flex flex-wrap overflow-hidden px-5">
      {results && results?.entries?.length > 0 ? (
        results?.entries?.map(({ title, link, source, published, summary, id }, i) => (
          <div className="w-full overflow-hidden my-5 " key={id}>
            <small className=" text-gray-900 dark:text-gray-50">
              {source.href} - {published}{" "}
            </small>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-bold text-sky-600 hover:underline">{title}</h3>
            </a>
            <p className=" text-lg  text-gray-900 dark:text-gray-50">{link}</p>
          </div>
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};
