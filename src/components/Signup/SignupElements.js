import styled from "styled-components";
import { Link } from "react-router-dom";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
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
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4); */

  @media screen and (max-width: 450px) {
    padding: 0px 32px;
    width: 90%;
  }
`;

export const FormH1 = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 1.5em;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  border: 1px solid #556b2f;
`;

export const FormButton = styled.button`
  background: #010101;
  padding: 12px 30px;
  border: none;
  border-radius: 24px;
  color: #fff;
  max-width: 120px;
  font-size: 16px;
  align-self: flex-end;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 14px;
  font-size: 13px;
  text-align: right;
`;

export const NavLink = styled(LinkR)`
  color: #888;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%auto;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const ImageWrapper = styled.img`
  height: 180px;
  margin: -40px 0 40px 0;
  @media (max-width: 450px) {
    height: 140px;
    margin-top: -10px;
  }
`;

export const SignInSection = styled.div`
  display: grid;
  align-items: end;
  justify-items: right;
  grid-template-columns: 1fr 100px;
  margin-top: 20px;
`;
