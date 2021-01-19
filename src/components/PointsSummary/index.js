import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  ContentH1,
  Text,
  ContentWrap,
  ImageWrapper,
  Container,
  BtnWrapper,
} from "./PointsSummaryElements";

const PointsSummarySection = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Container>
        <ContentWrap>
          <ImageWrapper src="/images/elements/Success.svg" alt="Success" />
          <ContentH1>Sweet!</ContentH1>
          <Text>You just earned 30 points</Text>
          <BtnWrapper>
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
          </BtnWrapper>
        </ContentWrap>
      </Container>
    </>
  );
};

export default PointsSummarySection;
