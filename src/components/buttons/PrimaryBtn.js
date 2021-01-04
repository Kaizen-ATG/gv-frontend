import React from "react";
import styled from "styled-components";
import { MediumText } from "../../styles/TextStyles";

export default function PrimaryButton(props) {
  return (
    <BtnWrapper>
      <BtnTitle>{props.title || "Primary Btn"}</BtnTitle>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  min-width: 80px;
  max-width: 140px;
  font-size: 16px;
  padding: 2px 20px;
  margin: 0 8px 0 0;
  outline: none;
  font-weight: 600;
  vertical-align: middle;
  text-align: center;
  color: #000;
  font-weight: 500;
  border-radius: 8px;
  background: #12c35a;
  cursor: pointer;
`;

const BtnTitle = styled(MediumText)`
  color: white;
  font-weight: bold;
`;
