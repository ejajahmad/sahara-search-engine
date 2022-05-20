import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, getResults, changeResult, resultTime } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(location.pathname.slice(1));
  }, [changeResult, location]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap overflow-hidden px-5">
          {results && results?.results?.length > 0 && (
            <p>
              About {results?.results?.length} results in {resultTime} seconds
            </p>
          )}
          {results &&
            results?.results?.map(({ link, title, description, cite }, i) => (
              <div className="w-full overflow-hidden my-5 " key={`search-result-${i + 1}`}>
                <small className=" text-gray-900 dark:text-gray-50">{cite.domain}</small>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-2xl font-bold  text-sky-600 ">{title}</h3>
                </a>
                <p className=" text-lg  text-gray-900 dark:text-gray-50">{description}</p>
              </div>
            ))}
        </div>
      );
    case "/image":
      return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-4">
          {results &&
            results?.image_results?.map(({ link, image }, i) => (
              <div className="" key={`image-result-${i + 1}`}>
                <img src={image.src && image.src} alt={image.alt && image.alt} className=" w-full" />
                <a href={link.href}>
                  <p>{link.title}</p>
                  <small>{link.href.split("?=")[1]}</small>
                </a>
              </div>
            ))}
        </div>
      );

    case "/video":
      return (
        <div className="flex flex-wrap overflow-hidden px-5">
          {results &&
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
            })}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap overflow-hidden px-5">
          {results &&
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
            ))}
        </div>
      );
    default:
      return <p>Results</p>;
  }
};
