import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useState } from "react";
import axios from "axios";
import './index.css';


export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.
    console.log(Email);
    console.log(Password);

    let body = {
      email: Email,
      password: Password,
    };

    axios
      .post("/api/users/login", body)
      .then((res) => console.log(res));
  };

  return (
  
    <BoxContainer>
      <FormContainer onSubmit={submitHandler} id="loginform">

      <Input type="email" placeholder="이메일" value={Email} onChange={emailHandler} name="email"/>
      <Input type="password" placeholder="패스워드" value={Password} onChange={passwordHandler} name="password"/>
  
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">패스워드를 까먹으셨나요?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" form="loginform" 
      whileHover={{fontStyle: 'italic'}}
      >
        로그인
      </SubmitButton>
      
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        아직 계정이 없나요?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          회원가입
        </BoldLink>
      </MutedLink>
    </BoxContainer>

    



  );
}
