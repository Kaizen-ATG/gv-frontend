import React, { useContext, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { CTAButton } from "../ButtonElement";
import { Auth } from "aws-amplify";
import { saveUser } from "../../utils/apiCalls";

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

const SignIn = (props) => {
  const [hover, setHover] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false,
    },
  });

  const [error, setError] = useState(null);
  const history = useHistory();
  const onHover = () => {
    setHover(!hover);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password, fullname } = signUpDetails;

    console.log(e.target);
    try {
      const { user } = await Auth.signUp({
        username,
        password
      });
      await saveUser(fullname,username);
    } catch (error) {
      console.log("error signing up:", error);
    }
    localStorage.setItem("email", username);
    history.push("../dashboard");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <img src="/images/logos/logo.svg" alt="logo" />
          </Icon>
          <FormContent>
            <Form onSubmit={(event) => handleSubmit(event)}>
              <ImageWrapper
                src="/images/elements/sign-in.svg"
                alt="enter code"
              />
              <FormH1>Sign up</FormH1>

              <FormLabel htmlFor="fullname">Username</FormLabel>

              <FormInput
                onChange={handleChange}
                type="text"
                id="fullname"
                name="fullname"
                value={signUpDetails.fullname}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                onChange={handleChange}
                type="text"
                id="email"
                name="username"
                value={signUpDetails.username}
              />
              <FormLabel htmlFor="password">Password</FormLabel>

              <FormInput
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                value={signUpDetails.password}
              />
              <ButtonWrapper type="submit">Submit</ButtonWrapper>
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
