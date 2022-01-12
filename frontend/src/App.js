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
    <>
    <body className="b1">
    <AppContainer>
      <AccountBox />
    </AppContainer>
    </body>
    </> //이거를 이렇게 묶으면 html이 정상 작동함.
  );
}

export default App;
