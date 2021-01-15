import styled from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const AcctContainer = styled.div`
  margin-top: 60px;
  display: grid;
  justify-items: center;
  min-height: 500px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
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
  height: 400px;
  margin-top: -30px;
  @media (max-width: 450px) {
    height: 300px;
  }
`;
