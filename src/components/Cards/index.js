import React from "react";
import {
  ContentWrapper,
  InnerWrapper,
  CardGroup,
  CardText,
  CardLink,
  CardHeaderText,
  GraphImage,
  ImageContainer,
  CarbonContainer,
  DayPoints,
  Desc,
} from "./CardsElements";

const CardSection = () => {
  return (
    <ContentWrapper>
      <CardGroup>
        <InnerWrapper>
          <CardHeaderText>Carbon Footprint</CardHeaderText>
          <CardLink>More </CardLink>
          <CardText>Week 4</CardText>
        </InnerWrapper>
        <ImageContainer>
          <GraphImage src="/images/elements/doughnutchart.svg" />
        </ImageContainer>
        <CarbonContainer>
          <DayPoints>
            65%
            <Desc>Day Average</Desc>
          </DayPoints>
          <DayPoints>
            69%
            <Desc> Last week</Desc>
          </DayPoints>
          <DayPoints>
            67%
            <Desc> Last month</Desc>
          </DayPoints>
        </CarbonContainer>
      </CardGroup>
    </ContentWrapper>
  );
};

export default CardSection;
