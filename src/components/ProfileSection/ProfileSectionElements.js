import styled from "styled-components";
import { H1, SmallText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { MdAdd } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { RiLeafLine } from "react-icons/ri";
import { BiCubeAlt } from "react-icons/bi";

export const ProfileWrapper = styled.div`
  /* background: green; */
  margin-top: 20px;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
  position: relative;
  width: 100%;

  @media (max-width: 640px) {
  }
`;
export const PlayerGroup = styled.div`
  /* background: blue; */
  display: grid;
  grid-template-rows: auto;
`;

export const PlayerAvatar = styled.img`
  height: 120px;
  width: 120px;
  background: #f2f2f2;
  border-radius: 50%;
  justify-self: center;
  margin: 24px 0 0;

  @media (max-width: 640px) {
    height: 90px;
    width: 90px;
  }
`;

export const PlayerPoints = styled.div`
  margin: 12px 0 0;
  display: grid;
  grid-template-columns: 14px 20px 14px 20px;
  grid-gap: 12px;
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 16px;
  max-width: 140px;
  justify-self: center;
`;
export const Greenli = styled.div`
  font-size: 13px;
  margin-right: 10px;
  font-weight: 800;
  color: #0ea44b;
  align-self: center;
  justify-self: center;
`;

export const Descgreen = styled(SmallText)`
  color: ${themes.light.text2};
`;

export const Descarb = styled(SmallText)`
  color: ${themes.light.text2};
`;

export const Carbonli = styled.div`
  font-size: 13px;
  font-weight: 800;
  padding-right: 8px;
  color: #785399;
  align-self: center;
  justify-self: center;
`;

export const Note = styled.p`
  margin-top: 32px;
  font-size: 13px;
  color: #555;
  align-self: center;
  justify-self: center;
`;

export const PlayerWeekPoints = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: 100px 100px;
  justify-items: center;
  @media (max-width: 640px) {
  }
`;
export const GreenWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #0ea44b;
  font-weight: 800;
  text-align: center;
`;

export const CarbonWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #785399;
  font-weight: 800;
  text-align: center;
`;

export const SectionText = styled(H1)`
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
  margin-top: 32px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 18px;
  justify-content: center;

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
