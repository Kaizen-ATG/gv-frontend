import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
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
  SkipSection,
  ButtonWrapper,
  SignInSection,
  NavLink,
} from "./SigninElements";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";

const SignIn = () => {
  const { userHasAuthenticated } = useAppContext();
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
    const { username, password } = signInDetails;

    console.log(e.target);
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      userHasAuthenticated(true);
      const { token } = useAppContext.data;
      localStorage.setItem("token", token);
      localStorage.getItem("token");
      console.log("token", token);
      history.push("../dashboard");
      alert("Logged in");
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
    <>
      <div>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="container">
            <label>Username : </label>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              value={signInDetails.username}
            />
            <label>Password : </label>
            <input
              onChange={handleChange}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={signInDetails.password}
            />
            <button type="submit">Signin</button>
            {/* <input type="checkbox" checked="checked" /> Remember me */}
            <button type="button" className="cancelbtn">
              {" "}
              Cancel
            </button>
            {/* Forgot <a href="#"> password? </a> */}
          </div>
        </form>
      </div>
    </>
    /* { <Container>
        <FormWrap>
          <Icon to="/">
            <img src="/images/logos/logo.svg" alt="logo" />
          </Icon>
          <FormContent>
            <Form action="#">
              <ImageWrapper
                src="/images/elements/sign-in.svg"
                alt="enter code"
              />
              <FormH1>Sign in</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <SkipSection>
                <NavLink to="">Forgot password?</NavLink>
              </SkipSection>
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
                <Text>Don't have an account?</Text>
                <NavLink to="/signup">Sign up</NavLink>
              </SignInSection>
            </Form>
          </FormContent>
        </FormWrap>
      </Container> }*/
    // </>
  );
};

export default SignIn;
