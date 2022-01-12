import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import  {Paper}  from "./rollingPaper/blankPage";
import { Widget } from "./widget/widget";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/rolling" element={<Paper/>} />
        <Route path="/rolling/1" element={<Widget/>}/>
      </Routes> 
    </BrowserRouter>
  );
};
export default Router;