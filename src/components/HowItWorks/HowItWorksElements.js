import styled from "styled-components";
import { H2, H3, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const SectionGroup = styled.div`
  margin: 0px 0px 60px;
  background: url("/images/waves/hero-wave01.svg");
  background-size: cover;

  display: grid;
  justify-content: center;
  grid-template-rows: auto;
  grid-gap: 20px;
  position: relative;

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
  grid-template-columns: 360px 360px 360px;

  @media (max-width: 960px) {
    grid-template-columns: 450px 450px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SubsectionTitle = styled(H3)`
  font-weight: 400;
`;

export const SubsectionContent = styled(MediumText)`
  color: ${themes.light.text1};
  font-weight: 400;
`;

export const SubsectionCol = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
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
