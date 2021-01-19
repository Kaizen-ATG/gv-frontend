import React from "react";
import redeemoffers from "../../data/redeemoffers.json";
import OffersCell from "../OffersCell";
import PointsBar from "../PointsBar";
import {
  SectionCaption,
  SectionCellGroup,
  ContentH1,
  Text,
  GreenText,
  DealWrap,
  ImageWrapper,
  Container,
  BarContainer,
  OffersDiv,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  OfferText,
} from "./RedeemElements";

const barData = [{ bgcolor: "#0EA44B" }];

const RedeemOffersSection = (props) => {
  return (
    <>
      <Container>
        <DealWrap>
          <ImageWrapper src="/images/elements/rewards.svg" alt="enter code" />
          <ContentH1>You've got 5 deals </ContentH1>
          <Text>Earn more points - Get rewarded!</Text>
          <GreenText>Here's your Green Points Score</GreenText>
        </DealWrap>
        <BarContainer>
          {barData.map((item, idx) => (
            <PointsBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={props.location.state.totalpoints}
              completedpercentage={
                (props.location.state.totalpoints / 450) * 100
              }
            />
          ))}
        </BarContainer>
        <OffersDiv>
          <FirstDiv>
            <OfferText>Upto 25% discount</OfferText>
          </FirstDiv>
          <SecondDiv>
            <OfferText>Special offers (150+ points)</OfferText>
          </SecondDiv>
          <ThirdDiv>
            <OfferText>Exclusive offers (300+ points)</OfferText>
          </ThirdDiv>
        </OffersDiv>
      </Container>
      <SectionCaption>Online and In Store Offers</SectionCaption>
      <SectionCellGroup>
        {redeemoffers.cells.map((cell) => (
          <OffersCell
            title={cell.title}
            image={cell.image}
            disc={cell.discount}
            cpoints={cell.carbonpoints}
            dest={cell.destination}
          />
        ))}
      </SectionCellGroup>
    </>
  );
};

export default RedeemOffersSection;
