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
  //const { isAuthenticated } = useContext(useAppContext);
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
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

      const userid = Object.keys(user.storage)[0].split(".")[2];
      //console.log(Object.keys(user.storage)[0]);

      await saveUser(userid, email, username);

      console.log(typeof userid, userid);
    } catch (error) {
      // to do: what happens if there is an error when signing up? - you could render an error.
      // to do: conditionally render div in react - setError(error.message)
      console.log("error signing up:", error);
    }

    history.push("../signin");
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
