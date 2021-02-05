import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ButtonElement";
import lottie from "lottie-web";
import animationData from "./thumbs-up.json";
import {
  Container,
  ContentH1,
  BtnWrapper,
  ContentWrap,
  Information1,
} from "./AddPointElements";

const Success = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Container>
        <ContentWrap>
          <div
            className="container"
            ref={container}
            style={{ width: 300, margin: "0 auto" }}
          ></div>
          <ContentH1>Sweet!</ContentH1>
          <Information1>You just earned 30 points</Information1>
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

export default Success;
