import React from "react";

export const ErrorPage = () => {
  return (
    <div className="flex flex-col flex-wrap overflow-hidden px-5">
      <p className="font-bold mt-5">Suggestions:</p>
      <ul className="p-2 ml-5 list-disc ">
        <li>
          <p>Check your spelling. Make sure that all words are spelled correctly.</p>
        </li>
        <li>
          <p>Try searching for something else. Try different keywords.</p>
        </li>
        <li>
          <p>Try more general keywords.</p>
        </li>
        <li>
          <p>If you used filters, try removing them.</p>
        </li>
      </ul>
    </div>
  );
};
