import React from "react";
import ReactPlayer from "react-player";
import { ErrorPage } from "./ErrorPage";

export const VideoResults = ({ results }) => {
  return (
    <div className="flex flex-wrap overflow-hidden px-5">
      {results && results?.results?.length > 0 ? (
        results?.results?.map(({ title, link, additional_links, description, cite }, i) => {
          return (
            additional_links?.[0].href.includes("https://www.youtube.com/watch") && (
              <div className="flex flex-row gap-3 w-full overflow-hidden my-5 " key={`video-${i}`}>
                <div>
                  <ReactPlayer url={additional_links?.[0].href} controls width="355px" height="200px" />
                </div>
                <div>
                  <small className=" text-gray-900 dark:text-gray-50">{cite.domain}</small>

                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-sky-600 hover:underline">{title}</h3>
                  </a>
                  <h4>{description}</h4>
                  <p className=" text-gray-900 dark:text-gray-50">{link}</p>
                </div>
              </div>
            )
          );
        })
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};
