import React from "react";
import {
  SectionGroup,
  SectionTitle,
  SubsectionGroup,
  SubsectionCol,
  SubsectionTitle,
  SubsectionContent,
  Topline,
  ImageContent,
  ImageWrapper,
} from "./HowItWorksElements";

const HowItWorksSection = () => {
  return (
    <SectionGroup id="how-it-works">
      <Topline>How it works</Topline>
      <SectionTitle>As easy as pie</SectionTitle>
      <SubsectionGroup>
        <SubsectionCol>
          <SubsectionTitle>Step1</SubsectionTitle>
          <SubsectionContent>Sign up with us</SubsectionContent>
          <ImageWrapper>
            <ImageContent
              src="/images/characters/Signing-up.svg"
              alt="Sign up"
            />
          </ImageWrapper>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 2</SubsectionTitle>
          <SubsectionContent>
            Recycle stuff at your nearest Kiosk
          </SubsectionContent>
          <ImageWrapper>
            <ImageContent
              src="/images/characters/bottle-recycle.svg"
              alt="recycle bottle"
            />
          </ImageWrapper>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 3</SubsectionTitle>
          <SubsectionContent>
            Scan or enter the code to earn green points
          </SubsectionContent>
          <ImageWrapper>
            <ImageContent
              src="/images/characters/Scan-code.svg"
              alt="scan code"
            />
          </ImageWrapper>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 4</SubsectionTitle>
          <SubsectionContent>
            Redeem points at your favourite outlet or coffee shop.
          </SubsectionContent>
          <ImageWrapper>
            <ImageContent
              src="/images/characters/Redeem-shop.svg"
              alt="redeem shop"
            />
          </ImageWrapper>
        </SubsectionCol>
      </SubsectionGroup>
    </SectionGroup>
  );
};

export default HowItWorksSection;
