import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import  {Hello}  from "./rollingPaper/blankPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/rolling" element={<Hello/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;