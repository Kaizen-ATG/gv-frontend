import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 100; */
`;

export const CloseIcon = styled(IoMdClose)`
  color: #0d0d0d;
  font-size: 24px;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  align-self: flex-start;
  margin-top: 60px;
  text-align: center;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 48px);

  @media screen and (max-width: 450px) {
    grid-template-rows: repeat(4, 48px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;

  padding-left: 24px;
  font-size: 14px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #0d0d0d;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLink2 = styled(LinkR)`
  display: flex;
  align-items: center;

  padding-left: 24px;
  font-size: 14px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #0d0d0d;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #12c35a;
  white-space: nowrap;
  padding: 16px 64px;
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
    border: 1px solid;
  }
`;
