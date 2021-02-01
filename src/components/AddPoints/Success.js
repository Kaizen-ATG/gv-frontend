import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  Container,
  ContentH1,
  ButtonWrapper,
  ImageWrapper,
  ContentWrap,
  Information1,
} from "./AddPointElements";

const Success = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Container>
        <ContentWrap>
          <ImageWrapper
            src="/images/elements/success.svg"
            alt="enter code"
            height="100px"
            width="100px"
          />
          <ContentH1>Sweet!</ContentH1>
          <Information1>You just earned 30 points</Information1>
          <ButtonWrapper>
            <Button
              to="/dashboard"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary=""
              dark="true"
              btnborder="true"
            >
              Go to dashboard
            </Button>
            <Button
              to="/redeem"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark=""
            >
              Redeem points
            </Button>
          </ButtonWrapper>
        </ContentWrap>
      </Container>
    </>
  );
};

export default Success;
