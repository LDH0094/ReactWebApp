import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

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
    </> 
  );
}

export default App;
