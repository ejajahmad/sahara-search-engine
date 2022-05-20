import React from "react";
import { ErrorPage } from "./ErrorPage";

export const ImageResults = ({ results }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-4">
      {results && results?.image_results.length > 0 ? (
        results?.image_results?.map(({ link, image }, i) => (
          <div className="" key={`image-result-${i + 1}`}>
            <img src={image.src && image.src} alt={image.alt && image.alt} className=" w-full" loading="lazy" />
            <a href={link.href}>
              <p>{link.title}</p>
              <small>{link.href.split("?=")[1]}</small>
            </a>
          </div>
        ))
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};
