import React from 'react';
import styled from 'styled-components';

//아마도 패딩?
const BoxContainer = styled.div`
  width: 280px;
  min-height: 555px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;


const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,121,9,1) 0%, rgba(24,127,43,1) 0%, rgba(0,212,255,1) 98%);

`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #f23;
  z-index: 10;
  margin: 0;
`;
export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop/>
            <HeaderContainer>
                <HeaderText>안녕하세요! 1</HeaderText>
                <HeaderText>안녕하세요! 2</HeaderText>
                <HeaderText>안녕하세요! 3</HeaderText>
                <HeaderText>안녕하세요! 4</HeaderText>
            </HeaderContainer>
        </TopContainer>
    </BoxContainer>
}