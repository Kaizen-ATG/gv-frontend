import React, { useState } from "react";
import { CTAButton } from "../ButtonElement";
import {
  Container,
  FormWrap,
  Form,
  FormH1,
  FormContent,
  FormInput,
  FormLabel,
  ImageWrapper,
  ButtonWrapper,
} from "./AddPointElements";

const AddPoints = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <ImageWrapper
                src="/images/characters/enter-code.svg"
                alt="enter code"
              />
              <FormH1>Enter Your Code </FormH1>
              <FormLabel htmlFor="for">
                Enter the 4 digit code as seen on the kiosk screen/ receipt
              </FormLabel>
              <FormInput type="code" required />
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
                  Apply Code
                </CTAButton>
              </ButtonWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default AddPoints;
