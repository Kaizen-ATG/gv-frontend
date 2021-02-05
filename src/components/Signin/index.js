import React, { useState } from "react";
import { CTAButton } from "../ButtonElement";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";
import { withRouter, useHistory } from "react-router-dom";
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
  SkipSection,
  ButtonWrapper,
  SignInSection,
  NavLink,
  SigninButton,
  CancelButton,
} from "./SigninElements";

const SignIn = () => {
  const history = useHistory();

  const [signInDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = signInDetails;

    console.log(e.target);
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      localStorage.setItem("email", user.attributes.email);
      history.push("../dashboard");
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setSignInDetails({
      ...signInDetails,
      [name]: value,
    });
  };

  return (
      <Container>
        <FormWrap>
          <Icon to="/">
            <img src="/images/logos/logo.svg" alt="logo" />
          </Icon>
          <FormContent>
            <Form action="#" onSubmit={(event) => handleSubmit(event)}>
              <ImageWrapper
                src="/images/elements/sign-in.svg"
                alt="enter code"
              />
              <FormH1>Sign in</FormH1>
              <FormInput
                onChange={handleChange}
                type="text"
                placeholder="Enter Username"
                name="username"
                required
                value={signInDetails.username}
              />
              <FormInput
                onChange={handleChange}
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                value={signInDetails.password}
              />
              <SigninButton type="submit">Signin</SigninButton>
              <CancelButton type="button" className="cancelbtn">{" "} Cancel</CancelButton>
            </Form>
          </FormContent>
        </FormWrap>
    </Container>
  );
};

export default SignIn;
