import styled from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { MdAdd } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { RiLeafLine } from "react-icons/ri";
import { BiCubeAlt } from "react-icons/bi";

export const ContentWrapper = styled.div`
  /* background: green; */
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  grid-gap: 20px;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
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
  max-width: 360px;
  flex-direction: column;
  grid-gap: 20px;
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.0697389);
  border-radius: 12px;
`;

export const CardText = styled.p`
  font-size: 13px;
  color: #555;
  align-self: center;
  justify-self: center;
`;

export const SectText = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

export const BtnWrapper = styled.div`
  /* background: yellow; */
  margin-top: 12px;
  display: grid;
  justify-content: right;

  @media (max-width: 450px) {
    display: flex;
    grid-template-rows: 1fr 1fr;
    flex-direction: column;
    line-height: 1.5em;
    padding: 0 24px;
    margin-bottom: 60px;
  }
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

export const CarbonIcon = styled(BiCubeAlt)`
  font-size: 14px;
`;
