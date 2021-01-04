import React from "react";
import styled from "styled-components";
import { menuData } from "../data/menu-data";
import MenuButton from "../components/buttons/menu-button";

export default function MenuExpand(props) {
  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen}>
      {menuData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 20px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 200px;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

  @media (max-width: 450px) {
    grid-template-columns: 300px;
    grid-template-rows: auto;
    grid-gap: 1em;
  }
`;
