import styled from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const DealWrap = styled.div`
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

export const ContentButton = styled.button`
  background: #010101;
  padding: 12px 30px;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

export const ImageWrapper = styled.img`
  height: 220px;
  margin-top: -30px;
  @media (max-width: 450px) {
    height: 180px;
    margin-top: -20px;
  }
`;

export const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #785399;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto 24px;

  @media (max-width: 640px) {
  }
`;

export const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;

  @media (max-width: 640px) {
    margin: 0 auto 20px;
  }
`;
