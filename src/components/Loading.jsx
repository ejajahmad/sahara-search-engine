import React, { useState } from "react";
import { Rings } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Rings color="#00BFFF" />
    </div>
  );
};
