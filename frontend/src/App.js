import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Envelope } from "./components/envelope/envelope";
import { Button } from "react-bootstrap";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router-dom";
import { Hello } from "./components/rollingPaper/blankPage";
// import Wave from './images/wave.svg';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  
`;

function App() {
  return (
    <>
    <AppContainer>
      <AccountBox />
    </AppContainer>
    </> //이거를 이렇게 묶으면 html이 정상 작동함.
  );
}

export default App;
