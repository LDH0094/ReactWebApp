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
import { Form } from "react-bootstrap";
import './index.css';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <form method="post" action="/api/loginsend"> 
          <Input type="email" placeholder="이메일" name="email"/>
          <Input type="password" placeholder="패스워드" name="password"/>
        </form>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">패스워드를 까먹으셨나요?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">로그인</SubmitButton>
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
