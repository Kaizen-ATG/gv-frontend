import styled from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { BiMessageAltError } from "react-icons/bi";

export const Container = styled.div`
  /* display: grid; */
  margin-top: 60px;
  min-height: 500px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const FormWrap = styled.div`
  /* height: 100px; */
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 450px) {
  }
`;

export const ContentWrap = styled.div`
  /* height: 100px; */
  flex-direction: column;
  justify-items: center;
  text-align: center;

  @media screen and (max-width: 450px) {
  }
`;

export const FormContent = styled.div`
  height: 100%;

  /* justify-content: center; */

  @media screen and (max-width: 480px) {
  }
`;

export const Form = styled.form`
  /* background: #f2f2f2; */
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  margin: 0 auto;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4); */

  @media screen and (max-width: 450px) {
    padding: 40px 0px;
    width: 90%;
  }
`;

export const FormH1 = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
  text-align: center;
  line-height: 1.5em;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin: 0px 32px 32px 32px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  border: 1px solid #556b2f;
  border-radius: 4px;
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const ImageWrapper = styled.img`
  height: 220px;
  margin-top: -30px;
  @media (max-width: 450px) {
    height: 180px;
    margin-top: -20px;
  }
`;

export const ButtonWrapper = styled.div`
  /* margin-top: 60px; */
  display: flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;

    line-height: 1.5em;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  grid-gap: 24px;
  align-items: center;
  justify-content: center;
  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 40px 24px 0;
    line-height: 1.5em;
  }
`;

export const ApplyButton = styled.button`
  border-radius: 24px;
  background: #010101;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #010606;
    color: #010606;
  }
`;

export const InfoContainer = styled.div`
  margin: 12px;
  display: grid;
  grid-template-columns: 20px auto;
  /* flex-wrap: nowrap; */
  align-items: center;
  grid-gap: 8px;
  padding: 16px;
  background: #ffede6;
  /* max-width: 550px; */
`;

export const InfoIcon = styled(BiMessageAltError)`
  font-size: 20px;
`;

export const Information = styled.p`
  font-size: 13px;
  text-align: left;
  color: red;
`;

export const Information1 = styled.p`
  font-size: 13px;
  text-align: center;
`;

export const ContentH1 = styled(H1)`
  color: ${themes.light.text1};
  text-align: center;
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;
