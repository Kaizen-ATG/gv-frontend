import React, { useState } from "react";
import { CTAButton } from "../ButtonElement";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  Text,
  FormContent,
  FormInput,
  FormLabel,
  ImageWrapper,
  ButtonWrapper,
  SignInSection,
  NavLink,
} from "./SignupElements";

const SignIn = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            {" "}
            <img src="/images/logos/logo.svg" alt="logo" />
          </Icon>
          <FormContent>
            <Form action="#">
              <ImageWrapper
                src="/images/elements/sign-in.svg"
                alt="enter code"
              />
              <FormH1>Sign up</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="username" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <ButtonWrapper>
                <CTAButton
                  to="/dashboard"
                  type="submit"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark=""
                  btnborder="true"
                >
                  {" "}
                  Continue
                </CTAButton>
              </ButtonWrapper>

              <SignInSection>
                <Text>Already have an account?</Text>
                <NavLink to="/signin">Sign in</NavLink>
              </SignInSection>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
