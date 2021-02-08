import React, { useEffect, useRef } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import lottie from "lottie-web";
import animationData from "./add-points.json";

import {
  Container,
  FormWrap,
  InfoIcon,
  Form,
  FormH1,
  FormContent,
  FormInput,
  InfoContainer,
  FormLabel,
  Information,
  ButtonWrapper,
  ApplyButton,
} from "./AddPointElements";

const AddPointsForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <div
                className="container"
                ref={container}
                style={{ width: 300, margin: "0 auto" }}
              ></div>
              <FormH1>Enter Your Code </FormH1>
              <FormLabel htmlFor="code">
                Enter the 4 digit code as seen on the kiosk screen/ receipt
              </FormLabel>
              <FormInput
                type="text"
                name="code"
                value={values.code}
                onChange={handleChange}
              />
              {errors.code && (
                <InfoContainer>
                  <InfoIcon />
                  <Information>{errors.code}</Information>
                </InfoContainer>
              )}
              <ButtonWrapper>
                <ApplyButton type="submit">Apply Code</ApplyButton>
              </ButtonWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default AddPointsForm;
