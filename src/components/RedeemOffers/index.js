import React, { useState, useEffect, useRef } from "react";
//import redeemoffers from "../../data/redeemoffers.json";
import OffersCell from "../OffersCell";
import PointsBar from "../PointsBar";
import { getOffers } from "../../utils/apiCalls.js";
import lottie from "lottie-web";
import animationData from "./offers.json";
import { useSelector } from "react-redux";
import {
  SectionCaption,
  SectionCellGroup,
  ContentH1,
  Text,
  GreenText,
  DealWrap,
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
  const [offers, setOffers] = useState();
  const userInfo = useSelector((state) => state.users.userDetail);
  useEffect(() => {
    const getRedeemOffers = async () => {
      const response = await getOffers();
      setOffers(response);
    };
    getRedeemOffers();
  }, []);

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

  return (
    <>
      <Container>
        <DealWrap>
          <div
            className="container"
            ref={container}
            style={{ width: 240, margin: "0 auto" }}
          ></div>
          <ContentH1>You've got 5 deals </ContentH1>
          <Text>Earn more points - Get rewarded!</Text>
          <GreenText>Here's your Green Points Score</GreenText>
        </DealWrap>
        <BarContainer>
          {barData.map((item, idx) => (
            <PointsBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={userInfo && userInfo[0].GreenPoints}
              completedpercentage={
                userInfo && (userInfo[0].GreenPoints / 450) * 100
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
        {offers &&
          offers.map((offer) => (
            <OffersCell
              title={offer.Dealtype}
              key={offer.Dealtype}
              image={
                "https://greenvibe.s3.eu-west-2.amazonaws.com/images/Retailers/" +
                offer.Dealtype +
                ".svg"
              }
              disc={offer.Description}
              dest="offersummary"
            />
          ))}
      </SectionCellGroup>
    </>
  );
};

export default RedeemOffersSection;
