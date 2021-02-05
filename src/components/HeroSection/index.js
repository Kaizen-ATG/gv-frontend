import React, { useState } from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroImg,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroImg src="/images/elements/background.svg" />
      <HeroContent>
        <HeroH1>
          Do your bit for a greener AO Arena, while earning rewards
        </HeroH1>
        <HeroP>
          For people who want to drive change and make a difference with helping
          save the environment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark=""
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
