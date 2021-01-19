import React from "react";
import {
  SectionGroup,
  SectionTitle,
  SubsectionGroup,
  SubsectionCol,
  SubsectionTitle,
  SubsectionContent,
  Topline,
} from "./HowItWorksElements";

const HowItWorksSection = () => {
  return (
    <SectionGroup>
      <Topline>How it works</Topline>
      <SectionTitle>As easy as riding a bicycle</SectionTitle>
      <SubsectionGroup>
        <SubsectionCol>
          <SubsectionTitle>Step1</SubsectionTitle>
          <SubsectionContent>Sign up with us</SubsectionContent>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 2</SubsectionTitle>
          <SubsectionContent>
            Recycle stuff at your nearest Kiosk
          </SubsectionContent>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 3</SubsectionTitle>
          <SubsectionContent>
            Scan or enter the code to earn green points
          </SubsectionContent>
        </SubsectionCol>
        <SubsectionCol>
          <SubsectionTitle>Step 4</SubsectionTitle>
          <SubsectionContent>
            Redeem points at your favourite outlet or coffee shop.
          </SubsectionContent>
        </SubsectionCol>
      </SubsectionGroup>
    </SectionGroup>
  );
};

export default HowItWorksSection;
