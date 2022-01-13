import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Apple from "../apple"
import { Paper } from "./rollingPaper/blankPaper";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/rolling/:rollingId" element={<Apple/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;