import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "../components/buttons/menu-button";
import { menuData } from "../data/menu-data";
import MenuExpand from "../tooltips/menu-expand";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <img src="/images/logos/logo.svg" alt="logo" />
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
        <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/icons/hamburger.svg",
              link: "#",
            }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <MenuExpand isOpen={isOpen} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;
const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
