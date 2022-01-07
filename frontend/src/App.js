import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Wave from './images/logo.svg';

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
    <AppContainer>
      <AccountBox />
      <img src={Wave}/>
    </AppContainer>
  );
}

export default App;
