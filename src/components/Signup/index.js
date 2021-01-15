import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormH1,
  Text,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  ImageWrapper,
  SignInSection,
  NavLink,
} from "./SignupElements";

const SignUp = () => {
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
              <FormH1>Sign Up</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput type="username" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton to="/dashboard" type="submit">
                Continue
              </FormButton>
              <SignInSection>
                <Text>Already have an account? - </Text>
                <NavLink to="/signin">Sign in</NavLink>
              </SignInSection>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
