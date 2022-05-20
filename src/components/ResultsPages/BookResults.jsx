import React from "react";
import { ErrorPage } from "./ErrorPage";

export const BookResults = ({ results }) => {
  console.log("BOOK", results);
  return (
    <div className="flex flex-wrap overflow-hidden px-5">
      {results && results?.items?.length > 0 ? (
        results?.items?.map(
          ({ volumeInfo: { title, authors, publishedDate, description, imageLinks, infoLink, categories } }, i) => {
            return (
              title &&
              authors &&
              imageLinks &&
              description &&
              infoLink && (
                <div className="flex flex-row gap-3 w-full overflow-hidden my-5 " key={`video-${i}`}>
                  <div>
                    <img
                      src={
                        imageLinks?.thumbnail ||
                        `https://d1lp72kdku3ux1.cloudfront.net/title_instance/b31/small/1022796.jpg`
                      }
                      alt={title}
                      width={300}
                      className="rounded"
                    />
                  </div>
                  <div>
                    <small className=" text-gray-900 dark:text-gray-50"> {categories?.[0]}</small>

                    <a href={infoLink} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-2xl font-bold text-sky-600 hover:underline">{title}</h3>
                      <p className=" text-gray-900 dark:text-gray-50 ">
                        by {authors?.[0]} • {publishedDate}{" "}
                      </p>
                    </a>
                    <h4>{description?.substring(0, 200) + "..."}</h4>
                  </div>
                </div>
              )
            );
          }
        )
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};
