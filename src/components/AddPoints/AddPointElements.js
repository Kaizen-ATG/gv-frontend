import styled from "styled-components";
import { Link } from "react-router-dom";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const Container = styled.div`
  margin-top: 60px;
  display: grid;
  min-height: 500px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const FormWrap = styled.div`
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 450px) {
  }
`;

export const Icon = styled(Link)`
  margin: 32px;
  text-decoration: none;
  color: #fff;

  @media screen and (max-width: 450px) {
    margin-left: 24px;
    margin-top: 18px;
  }
`;

export const FormContent = styled.div`
  height: 100%;

  justify-content: center;

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
  flex-flow: column;
  grid-gap: 20px;
  align-items: center;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4); */

  @media screen and (max-width: 450px) {
    padding: 40px 32px;
    width: 90%;
  }
`;

export const FormH1 = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
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
  margin-bottom: 32px;
  text-align: center;
  font-size: 24px;
  max-width: 240px;
  border: 1px solid #556b2f;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #010101;
  padding: 12px 30px;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
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
