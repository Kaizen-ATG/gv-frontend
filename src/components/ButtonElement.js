import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 24px;
  background: ${({ primary }) => (primary ? "#12c35a" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnborder }) => (btnborder ? "1px solid black" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#0EA44B" : "#fff")};
    border: ${({ btnborder }) => (btnborder ? "1px solid #12c35a" : "none")};
    color: ${({ dark }) => (dark ? "#12c35a" : "#fff")};
  }
`;

export const CTAButton = styled(LinkR)`
  border-radius: 24px;
  background: ${({ primary }) => (primary ? "#010101" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnborder }) => (btnborder ? "1px solid black" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#010606")};
    border: ${({ btnborder }) => (btnborder ? "1px solid #010606" : "none")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
  }
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
