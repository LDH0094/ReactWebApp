import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
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
    <AppContainer>
        {/* <img height={50} src={Wave} alt=""/> */}

      <AccountBox />
    </AppContainer>
  );
}

export default App;
