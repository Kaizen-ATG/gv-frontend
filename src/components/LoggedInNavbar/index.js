import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  LgInNav,
  LgInNavbarContainer,
  LgInNavLogo,
  LgInMobileIcon,
  LgInNavMenu,
  LgInNavItem,
  LgInNavLinks,
  LgInNavBtn,
  LgInNavBtnLink,
} from "./LoggedInNavbarElements";

const LoggedInNavbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <LgInNav scrollNav={scrollNav}>
        <LgInNavbarContainer>
          <LgInNavLogo to="dashboard" onClick={toggleHome}>
            <img src="/images/logos/logo.svg" alt="logo" />
          </LgInNavLogo>
          <LgInMobileIcon onClick={toggle}>
            <img src="/images/icons/hamburger.svg" alt="hamburger icon" />
          </LgInMobileIcon>
          <LgInNavMenu>
            <LgInNavItem>
              <LgInNavLinks to="how-it-works">How it works</LgInNavLinks>
            </LgInNavItem>
            <LgInNavItem>
              <LgInNavLinks to="Redeem">Redeem</LgInNavLinks>
            </LgInNavItem>
            <LgInNavItem>
              <LgInNavLinks to="addpoints">Add points</LgInNavLinks>
            </LgInNavItem>
            <LgInNavItem>
              <LgInNavLinks to="profile">Profile</LgInNavLinks>
            </LgInNavItem>
          </LgInNavMenu>
          <LgInNavBtn>
            <LgInNavBtnLink to="/signin">Sign Out</LgInNavBtnLink>
          </LgInNavBtn>
        </LgInNavbarContainer>
      </LgInNav>
    </>
  );
};

export default LoggedInNavbar;
