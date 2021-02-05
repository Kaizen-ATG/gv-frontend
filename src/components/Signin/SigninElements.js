import styled from "styled-components";
import { Link } from "react-router-dom";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  min-height: 500px;
  @media screen and (max-width: 480px) {
  }
`;
export const FormWrap = styled.div`
  /* height: 100px; */
  display: flex;
  flex-direction: column;

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
  margin-top: -60px;
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
  padding: 80px 12px;
  border-radius: 4px;
  /* box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4); */

  @media screen and (max-width: 450px) {
    padding: 40px 32px;
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

export const Text = styled.p`
  font-size: 13px;
  text-align: right;
  @media screen and (max-width: 450px) {
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

export const SkipSection = styled.div`
  display: flex;
  justify-self: end;
  justify-content: flex-end;
  margin-top: -20px;
  @media screen and (max-width: 450px) {
    justify-content: flex-end;
  }
`;

export const NavLink = styled(LinkR)`
  color: #0ea44b;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 100%;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  @media screen and (max-width: 450px) {
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;

    line-height: 1.5em;
  }
`;

export const SignInSection = styled.div`
  display: grid;
  align-items: end;
  justify-items: right;
  grid-template-columns: 1fr 60px;
  margin-top: 32px;
`;
export const SigninButton = styled.button`
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
  margin-bottom:20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #010606;
    color: #010606;
  }
`;
export const CancelButton = styled.button`
  border-radius: 24px;
  background: #fff;
  white-space: nowrap;
  padding: 14px 48px;
  color: #0ea44b;
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
