import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  ContentH1,
  Text,
  DealWrap,
  ImageWrapper,
  Container,
  ButtonWrapper,
} from "./RedeemSummaryElements";

const RedeemSummarySection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container>
        <DealWrap>
          <ImageWrapper
            src="/images/Retailers/starbucks.svg"
            alt="Starbucks logo"
          />
          <ContentH1>Starbucks</ContentH1>
          <Text>25% discount on coffee</Text>
          <ButtonWrapper>
            <Button
              to="/redeem"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary=""
              dark="true"
              btnborder="true"
            >
              {" "}
              Take me back
            </Button>
            <Button
              to="/success"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark=""
            >
              {" "}
              Yes I want this
            </Button>
          </ButtonWrapper>
        </DealWrap>
      </Container>
    </>
  );
};

export default RedeemSummarySection;
