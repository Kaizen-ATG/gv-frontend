import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { H1, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0px 30px 20px;
  height: 600px;
  position: relative;
  z-index: 1;
  @media (max-width: 450px) {
    padding: 30px;
    height: 560px;
    margin-bottom: 30px;
  }
`;

export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  /* background-image: url("/images/elements/background.svg"); */
  background-attachment: fixed;
  background-repeat: no-repeat;
  object-fit: cover;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  position: absolute;
  width: 100%;
  height: 400px;
  margin-top: 200px;
  @media (max-width: 767px) {
    object-fit: cover;
  }
  @media (max-width: 450px) {
    object-fit: cover;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  margin-top: 60px;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
  }
  @media (max-width: 450px) {
  }
`;

export const HeroH1 = styled(H1)`
  color: ${themes.light.text1};
  text-align: center;

  @media screen and (max-width: 900px) {
    font-size: 48px;
  }
  @media screen and (max-width: 450px) {
    font-size: 32px;
  }
`;

export const HeroP = styled(MediumText)`
  margin-top: 24px;
  /* color: #3913b8; */
  color: ${themes.light.text1};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  z-index: 3;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
