import styled, { keyframes } from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { tada } from "react-animations";

const tadaAnimation = keyframes`${tada}`;

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const ContentWrap = styled.div`
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 450px) {
  }
`;

export const ContentH1 = styled(H1)`
  color: ${themes.light.text1};
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

export const ImageWrapper = styled.img`
  height: 180px;
  animation: 0.7s ${tadaAnimation};

  @media (max-width: 450px) {
    height: 120px;
  }
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 60px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    line-height: 1.5em;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
