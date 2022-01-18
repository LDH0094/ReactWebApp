import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Paper from "../paper"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/rolling/:rollingId" element={<Paper/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;