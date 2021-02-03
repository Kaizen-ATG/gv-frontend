import React from "react";
import {
  ContentWrapper,
  InnerWrapper,
  CardGroup,
  CardText,
  CardLink,
  CardHeaderText,
  GraphImage2,
  ImageContainer,
  Infotext,
} from "./CardsElements";

const CardSectionAlt = () => {
  return (
    <ContentWrapper>
      <CardGroup>
        <InnerWrapper>
          <CardHeaderText>User Statistics</CardHeaderText>
          <CardLink>More </CardLink>
          <CardText>App usage</CardText>
        </InnerWrapper>
        <ImageContainer>
          <GraphImage2 src="/images/elements/linechart.svg" />
        </ImageContainer>
        <Infotext>There’s been a slight increase in user activity</Infotext>
      </CardGroup>
    </ContentWrapper>
  );
};

export default CardSectionAlt;
