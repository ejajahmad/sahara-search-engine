import React from "react";
import { Routes as RouteContainer, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
  return (
    <div className="p-4">
      <RouteContainer>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
        <Route path="/books" element={<Results />} />
      </RouteContainer>
    </div>
  );
};
