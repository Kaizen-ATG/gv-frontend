import React from "react";
import {
  AddIcon,
  GiftIcon,
  AskHow,
} from "../LoggedInSidebar/LoggedInSidebarElements";
import {
  LgInSidebarContainer,
  Icon,
  CloseIcon,
  LgInSidebarWrapper,
  LgInSidebarMenu,
  LgInSidebarLinkWrapper,
  LgInSidebarLink,
  LgInSideBtnWrap,
  LgInSidebarRoute,
} from "./LoggedInSidebarElements";

const LoggedInSidebar = ({ isOpen, toggle }) => {
  return (
    <LgInSidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <LgInSidebarWrapper>
        <LgInSidebarMenu>
          <LgInSidebarLinkWrapper>
            <img src="/images/avatars/steph.png" alt="profile" />
            <LgInSidebarLink to="profile" onClick={toggle}>
              Profile
            </LgInSidebarLink>
          </LgInSidebarLinkWrapper>
          <LgInSidebarLinkWrapper>
            <>{<AddIcon />}</>
            <LgInSidebarLink to="addpoints" onClick={toggle}>
              Add Points
            </LgInSidebarLink>
          </LgInSidebarLinkWrapper>
          <LgInSidebarLinkWrapper>
            <>{<GiftIcon />}</>
            <LgInSidebarLink to="redeem" onClick={toggle}>
              Redeem
            </LgInSidebarLink>
          </LgInSidebarLinkWrapper>
          <LgInSidebarLinkWrapper>
            <>{<AskHow />}</>
            <LgInSidebarLink to="how-it-works" onClick={toggle}>
              How it works
            </LgInSidebarLink>
          </LgInSidebarLinkWrapper>
        </LgInSidebarMenu>
        <LgInSideBtnWrap>
          <LgInSidebarRoute to="/SignIn"> Log Out</LgInSidebarRoute>
        </LgInSideBtnWrap>
      </LgInSidebarWrapper>
    </LgInSidebarContainer>
  );
};

export default LoggedInSidebar;
