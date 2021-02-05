import React, { useState } from "react";
import { Button, CTAButton } from "../ButtonElement";
import {
  ContentH1,
  Text,
  DealWrap,
  ImageWrapper,
  Container,
  Information,
  InfoContainer,
  Reducedpoints,
  ButtonWrapper,
  InfoIcon,
  Question,
} from "./RedeemSummaryElements";

const RedeemSummarySection = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <Container>
        <DealWrap>
          <ImageWrapper
            src={'https://greenvibe.s3.eu-west-2.amazonaws.com/images/Retailers/' + props.location.state.title + '.svg'}
            alt="Deal logo"
          />
          <ContentH1>{props.location.state.title}</ContentH1>
          <Text>{props.location.state.disc}</Text>
          <InfoContainer>
            <InfoIcon />
            <Reducedpoints>30</Reducedpoints>
            <Information>
              Green points will be reduced. Your carbon free points remain.
            </Information>
          </InfoContainer>
          <Question>Would you like to redeem this offer?</Question>
          <ButtonWrapper>
            <Button
              to="/redeem"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary=""
              dark="true"
              btnborder="true"
            >
              No, take me back
            </Button>
            <CTAButton
              to="/deal-success"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark=""
            >
              Yes I want this
            </CTAButton>
          </ButtonWrapper>
        </DealWrap>
      </Container>
    </>
  );
};

export default RedeemSummarySection;
