import React from "react";
import styled from "styled-components";
import { SmallText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

const Footer = () => {
  return (
    <Wrapper>
      <Title>TechReturners 2020</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    position: relative;
  }
`;
const Title = styled(SmallText)`
  color: ${themes.light.text1};
`;

export default Footer;
