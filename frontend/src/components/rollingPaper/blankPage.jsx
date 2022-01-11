import styled from "styled-components";
import { Envelope } from "../envelope/envelope";
import "./blankPage.css";

// const Background = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: yellow;
// `;

// const Container1 = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   margin-left: 5%;
// `;
// const Container2 = styled.div`
//   position: absolute;
//   top: 26%;
//   left: 40%;
// `;



const ViewContainer = styled.div`
    width: 100%;
    height: 100%;

`;


const EnvelopeContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    margin-left: 5%;
    margin-right: 5%;
    justify-content: center;
    padding-top: 10%;
`;
export function Paper(){
    
    return(
        <>
        <body className="b1">
        <ViewContainer>
            <EnvelopeContainer>    
                <Envelope/>
                <Envelope/>
                <Envelope/>
                <Envelope/>

                <Envelope/>
                <Envelope/>
            </EnvelopeContainer>
        </ViewContainer>
        </body>
        </>
    );
}