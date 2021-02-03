import styled from "styled-components";
import { H1, SmallText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { MdAdd } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { RiLeafLine } from "react-icons/ri";
import { Link as LinkR } from "react-router-dom";

export const ContentWrapper = styled.div`
  /* background: green; */

  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  grid-gap: 20px;

  @media (max-width: 640px) {
  }
`;
export const ContentGroup = styled.div`
  /* background: blue; */

  display: flex;
  grid-template-rows: auto;
`;

export const CardGroup = styled.div`
  margin-top: 20px;
  display: flex;
  /* min-height: 300px; */
  max-width: 360px;
  flex-direction: column;
  padding: 24px 12px;
  background: #ffffff;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.0697389);
  border-radius: 12px;
`;

export const CardText = styled.p`
  font-size: 13px;
  color: #555;
`;

export const SectText = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const CardLink = styled(LinkR)`
  font-size: 13px;
  color: green;
  text-align: right;
`;

export const InnerWrapper = styled.div`
  /* background: yellow; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 8px;
`;

export const Desc = styled(SmallText)`
  color: ${themes.light.text2};
  margin-top: 8px;
`;

export const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
`;

export const Infotext = styled.div`
  font-size: 13px;
  color: #b3b3b3;
  margin: 12px 0;
`;

export const CardHeaderText = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
`;

export const CarbonContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 640px) {
  }
`;

export const DayPoints = styled.h3`
  padding: 8px;
  font-size: 24px;
  /* border-right: 1px solid #b7b7b7; */
  font-weight: 600;
  text-align: center;
  margin: 0 0 12px;
`;

export const AddIcon = styled(MdAdd)`
  margin-right: 8px;
  font-size: 20px;
`;

export const GiftIcon = styled(GoGift)`
  margin-right: 8px;
  font-size: 20px;
`;

export const LeafIcon = styled(RiLeafLine)`
  font-size: 13px;
  color: #0ea44b;
`;

export const GraphImage = styled.img`
  background: #f2f2f2;
  /* border-radius: 50%; */
  justify-self: center;
  /* margin: 0 0 24px; */
`;

export const GraphImage2 = styled.img`
  margin-top: 20px;
  background: #f2f2f2;
  /* border-radius: 50%; */
  justify-self: center;
  /* margin: 0 0 24px; */
`;
