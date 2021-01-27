import styled from "styled-components";
import { H1, MediumText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const AcctContainer = styled.div`
  margin-top: 60px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;

  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const AcctTxt = styled(MediumText)`
  color: ${themes.light.text1};
  justify-self: center;
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
  background: beige;
  padding: 8px 16px;
  min-width: 350px;

  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;
