import React, { useState } from "react";
import { CTAButton } from "../ButtonElement";
import { Modal } from "../Modals/points-modal";
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

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
                  type="submit"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark=""
                  btnborder="true"
                  onClick={openModal}
                >
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
