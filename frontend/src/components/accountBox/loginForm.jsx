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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
    console.log(email);
    console.log(password);

    let body = {
      email: email,
      password: password,
    };

    axios
      .post("/api/users/login", body)
      .then((res) => setName(res.data))
  };

  if (name){
    const str = "/rolling/"+name;
    window.location.replace(str)
  }

  return (
  
    <BoxContainer>
      <FormContainer onSubmit={submitHandler} id="loginform">
      
      <Input type="email" placeholder="이메일" value={email} onChange={emailHandler} name="email"/>
      <Input type="password" placeholder="핀번호" value={password} onChange={passwordHandler} name="password"/>
  
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">핀번호를 까먹으셨나요?</MutedLink>
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
