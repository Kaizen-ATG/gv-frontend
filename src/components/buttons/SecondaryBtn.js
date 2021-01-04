import React from "react";
import styled from "styled-components";
import { MediumText } from "../../styles/TextStyles";

export default function SecondaryButton(props) {
  return (
    <BtnWrapper>
      <BtnTitle>{props.title || "Secondary Btn"}</BtnTitle>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  height: 48px;
  min-width: 80px;
  max-width: 140px;
  border-radius: 24px;
  border: 2px solid #000;
  min-width: 50px;
  padding: 2px 20px;
  margin: 0 8px 0 0;
  outline: none;
  font-weight: 600;
  vertical-align: middle;
  text-align: center;
  color: #000;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`;

const BtnTitle = styled(MediumText)`
  font-weight: bold;
`;
