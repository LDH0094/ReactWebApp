import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { Envelope } from "./components/envelope/envelope";
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

// const Wrapper = styled.div`
//   height: 200px;
//   width: 300px;
//   background-color: #3760C9;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   z-index: 0;
//   box-sizing: border-box;

//   `;

// /* Lid when closed */
// const LidOne = styled.div`
// position: absolute;
// height: 100%;
// width: 100%;
// top: 0;
// left: 0;
// border-right: 150px solid transparent;
// border-bottom: 100px solid transparent;
// border-left: 150px solid transparent;
// transform-origin: top;
// transition: transform 0.25s linear;
//   border-top: 100px solid #658ced;
//   transform: rotateX(0deg);
//   z-index: 3;
//   transition-delay: 0.75s;
//   box-sizing: border-box;

//   `;


// /* Lid when opened */
// const LidTwo = styled.div`
// position: absolute;
// height: 100%;
// width: 100%;
// top: 0;
// left: 0;
// border-right: 150px solid transparent;
// border-bottom: 100px solid transparent;
// border-left: 150px solid transparent;
// transform-origin: top;
// transition: transform 0.25s linear;
//   border-top: 100px solid #3760C9;
//   transform: rotateX(90deg);
//   z-index: 1;
//   transition-delay: 0.5s;
//   box-sizing: border-box;

//   `;


//   const Envelope = styled.div`
//   position: absolute;
//   height: 100%;
//   width: 100%;
//   top: 0;
//   left: 0;
//   border-top: 100px solid transparent;
//   border-right: 150px solid #C4DFF0;
//   border-bottom: 100px solid #C4DFF0;
//   border-left: 150px solid #a4d4f2;
//   z-index: 3;
//   box-sizing: border-box;

//   `;

//   const Letter = styled.div`
//   position: absolute;
//   top: 0;
//   width: 80%;
//   height: 80%;
//   background-color: white;
//   border-radius: 15px;
//   z-index: 2;
//   transition: 0.5s;
//   box-sizing: border-box;
//   `;

function App() {
  return (
    <AppContainer>
      {/* <img height={50} src={Wave} alt=""/> */}
      {/* <Wrapper class="wrapper">
      <LidOne class="lid one"/> <LidTwo class="lid two"/>
      <Envelope/>
      <Letter class="letter"/>
      </Wrapper> */}
      <Envelope></Envelope>
      <AccountBox />
    </AppContainer>
  );
}

export default App;
