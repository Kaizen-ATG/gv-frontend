import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LgInNav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  /* margin-top: -80px; */
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const LgInNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const LgInNavLogo = styled(LinkR)`
  color: #fff;
  align-self: center;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;

  font-weight: bold;
  text-decoration: none;
`;

export const LgInMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const LgInNavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LgInNavItem = styled.li`
  height: 20px;
`;

export const LgInNavLinks = styled(LinkR)`
  color: #888;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const LgInNavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LgInNavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #12c35a;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
