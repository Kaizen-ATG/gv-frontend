import React, { useContext, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { CTAButton } from "../ButtonElement";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";

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
  //const { isAuthenticated } = useContext(useAppContext);
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [hover, setHover] = useState(false);
  const { userHasAuthenticated } = useAppContext();

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
    const { username, password, email } = signUpDetails;

    console.log(e.target);
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional

          // other custom attributes
        },
      });

      //POST request to add user to User DB
      console.log(user);
    } catch (error) {
      // to do: what happens if there is an error when signing up? - you could render an error.
      // to do: conditionally render div in react - setError(error.message)
      console.log("error signing up:", error);
    }
    try {
      const { user } = await Auth.signIn({
        username,
        password,
      });
      const { token } = useAppContext.data;
      localStorage.setItem("token", token);
      localStorage.getItem("token");
      console.log("token", token);
      // to do: handle what happens when user signsup successfully - do we redirect to dashboard?
      userHasAuthenticated(true);

      history.push("../dashboard");
    } catch (error) {
      // let err = null;
      // !error.message ? (err = { message: error }) : (err = error);
      // this.setState({
      //   errors: {
      //     ...this.state.errors,
      //     cognito: err,
      //   },
      // });
      console.log("error signing in", error);
    }
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

              <FormLabel htmlFor="username">Username</FormLabel>

              <FormInput
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                value={signUpDetails.username}
              />
              <FormLabel htmlFor="email">Email</FormLabel>

              <FormInput
                onChange={handleChange}
                type="text"
                id="email"
                name="email"
                value={signUpDetails.email}
              />
              <FormLabel htmlFor="password">Password</FormLabel>

              <FormInput
                onChange={handleChange}
                type="text"
                id="password"
                name="password"
                value={signUpDetails.password}
              />
              <ButtonWrapper>
                <button type="submit"> Submit</button>
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

  /* <Container>
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
      </Container> */
};

export default SignIn;
//const { userHasAuthenticated } = useAppContext();
