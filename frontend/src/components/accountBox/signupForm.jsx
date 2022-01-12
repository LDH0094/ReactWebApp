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
import { motion } from "framer-motion";


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="이름" />
        <Input type="email" placeholder="이메일" />
        <Input type="password" placeholder="패스워드" />
        <Input type="password" placeholder="패스워드 재확인" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit"
      whileHover={{fontStyle: 'italic'}}
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
