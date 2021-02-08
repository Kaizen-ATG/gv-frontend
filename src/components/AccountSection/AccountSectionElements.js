import styled from "styled-components";
import { H1, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { MdPersonOutline } from "react-icons/md";
import { IoShareSocialOutline, IoSettingsOutline } from "react-icons/io5";
import { Link as LinkR } from "react-router-dom";

export const AcctContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 480px) {
  }
`;

export const AcctTxt = styled(MediumText)`
  color: ${themes.light.text1};
  padding-left: 24px;
`;

export const AcctH1 = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const AcctImageWrapper = styled.img`
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  min-width: 350px;

  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 14px auto;
  padding: 12px 0;
  border-bottom: 1px solid #b3b3b3;
  /* padding: 8px 16px; */
  min-width: 350px;
`;

export const LgInSidebarRoute = styled(LinkR)`
  margin-top: 20px;
  border-radius: 50px;
  background: #12c35a;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    /* border: 1px solid; */
  }
`;

export const PersonIcon = styled(MdPersonOutline)`
  font-size: 18px;
`;

export const SocialIcon = styled(IoShareSocialOutline)`
  font-size: 18px;
`;

export const SettingsIcon = styled(IoSettingsOutline)`
  font-size: 18px;
`;

export const LgInSideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
