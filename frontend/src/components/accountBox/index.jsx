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
    box-shawdow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100px;
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
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,121,9,1) 0%, rgba(24,127,43,1) 0%, rgba(0,212,255,1) 98%);
    
    `;

export function AccountBox(props){
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
        </TopContainer>
    </BoxContainer>
}