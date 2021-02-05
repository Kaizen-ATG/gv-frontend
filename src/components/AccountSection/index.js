import React from "react";
import {
  AcctContainer,
  AcctH1,
  AcctTxt,
  ContentWrapper,
  AcctImageWrapper,
  PersonIcon,
  SocialIcon,
  SettingsIcon,
  TextWrapper,
  LgInSideBtnWrap,
  LgInSidebarRoute,
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
          <TextWrapper>
            <>{<PersonIcon />}</>
            <AcctTxt>Basic Profile</AcctTxt>
          </TextWrapper>
          <TextWrapper>
            <>{<SocialIcon />}</>
            <AcctTxt>Social Network</AcctTxt>
          </TextWrapper>
          <TextWrapper>
            <>{<SettingsIcon />}</>
            <AcctTxt>Account Settings</AcctTxt>
          </TextWrapper>
        </ContentWrapper>
        <LgInSideBtnWrap>
          <LgInSidebarRoute to="/SignIn">Sign Out</LgInSidebarRoute>
        </LgInSideBtnWrap>
      </AcctContainer>
    </>
  );
};

export default AccountSection;
