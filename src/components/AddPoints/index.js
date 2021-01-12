import React from "react";
import {
  Container,
  FormWrap,
  Form,
  FormH1,
  Text,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  ImageWrapper,
} from "./AddPointElements";

const AddPoints = () => {
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
              <FormInput type="email" required />
              <FormButton type="submit">Apply Code</FormButton>
              <Text>Where do I find the code?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default AddPoints;
