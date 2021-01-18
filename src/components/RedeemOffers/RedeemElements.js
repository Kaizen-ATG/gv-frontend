import styled from "styled-components";
import { H1, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  @media screen and (max-width: 480px) {
    margin-top: 40px;
    margin-bottom: 80px;
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
  color: ${themes.light.text2};
  font-size: 13px;

  margin-top: 20px;
`;

export const GreenText = styled(MediumText)`
  color: ${themes.light.text2};

  font-weight: 600;
  margin-top: 30px;
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

export const BarContainer = styled.div`
  display: flex;
  height: 20px;
  border-radius: 2px;
  /* margin: 50px; */
  margin: 20px 0;
`;

export const OffersDivWrapper = styled.div`
  /* background: yellow; */

  display: flex;
  flex-direction: column;
`;

export const OffersDiv = styled.div`
  /* background: yellow; */
  margin-top: -16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 32px;
`;

export const FirstDiv = styled.div`
  border-left: 1px dashed #e2e2e2;
`;

export const SecondDiv = styled.div`
  border-left: 1px dashed #e2e2e2;
`;

export const ThirdDiv = styled.div`
  border-left: 1px dashed #e2e2e2;
  border-right: 1px dashed #e2e2e2;
`;

export const OfferText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #999;
  text-align: left;
  padding: 8px 8px 0;
`;
