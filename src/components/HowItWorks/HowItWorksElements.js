import styled from "styled-components";
import { H2, H3, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const SectionGroup = styled.div`
  justify-content: center;
  /* 
  display: grid; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  padding: 0 24px;
  justify-content: center;
  @media (max-width: 640px) {
  }
`;

export const SectionTitle = styled(H2)`
  color: ${themes.light.text1};
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;

  @media (max-width: 640px) {
    margin-top: 20px;
  }
`;

export const SubsectionGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SubsectionTitle = styled(H3)`
  font-weight: 600;
`;

export const SubsectionContent = styled(MediumText)`
  color: ${themes.light.text1};
  font-weight: 400;
`;

export const SubsectionCol = styled.div`
  display: grid;
  grid-template-rows: auto;
  padding-bottom: 60px;
`;

export const Topline = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ImageContent = styled.img`
  height: 400px;
  margin-top: 60px;
  @media (max-width: 450px) {
    height: 320px;
    margin-top: 10px;
  }
`;

export const ImageWrapper = styled.div`
  /* background: blue; */
  text-align: center;
`;
