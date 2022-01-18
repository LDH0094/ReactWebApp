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
import  axios  from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
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

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(name);

    let body = {
      name: name,
      email: email,
      password: password
      
    };
    console.log(body)

    axios
      .post("/api/users/signup", body)
      .then((res) => setName(res))
  };
 

  return (
    <BoxContainer>
      <FormContainer onSubmit={submitHandler} id="signupForm">
        <Input type="text" placeholder="발송될 친구의 이름!" name="name" onChange={nameHandler} value={name}/>
        <Input type="email" placeholder="친구의 이메일" name="email" onChange={emailHandler} value={email} />
        <Input type="password" placeholder="롤링페이퍼 핀번호" name="password" onChange={passwordHandler} value={password}/>
        <Input type="password" placeholder="핀번호 재확인" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" form="signupForm"
      whileHover={{fontStyle: 'italic'}} href="#" onClick={switchToSignin}
      >
        회원가입
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        이미 계정이 있나요?
        <BoldLink href="#" onClick={switchToSignin}>
          로그인
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
