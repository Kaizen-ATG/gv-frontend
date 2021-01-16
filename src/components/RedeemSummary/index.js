import React from "react";
import {
  ContentH1,
  Text,
  DealWrap,
  ImageWrapper,
  Container,
} from "./RedeemSummaryElements";

const RedeemSummarySection = () => {
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
        </DealWrap>
      </Container>
    </>
  );
};

export default RedeemSummarySection;
