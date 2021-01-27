import React from "react";
import {
  AcctContainer,
  AcctH1,
  AcctTxt,
  ContentWrapper,
  AcctImageWrapper,
} from "./AccountSectionElements";

const AccountSection = () => {
  return (
    <>
      <AcctContainer>
        <AcctImageWrapper
          src="/images/avatars/avatar05.svg"
          alt="Account image"
        />
        <AcctH1>Stephany Harris</AcctH1>
        <ContentWrapper>
          <AcctTxt>Profile</AcctTxt>
        </ContentWrapper>
      </AcctContainer>
    </>
  );
};

export default AccountSection;
