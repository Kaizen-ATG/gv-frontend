import styled from "styled-components";
import { H1, SmallText } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";

export const ProfileWrapper = styled.div`
  /* background: green; */
  margin: 120px 0px 60px;
  /* background: url(''); */
  background-size: cover;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;

  @media (max-width: 640px) {
    margin: 100px 0px 160px;
    height: 200px;
  }
`;
export const PlayerGroup = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const PlayerAvatar = styled.img`
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
export const PlayerPoints = styled.div`
  margin: 12px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  border: 1px solid black;
  padding: 4px;
  border-radius: 16px;
  max-width: 80px;
  justify-self: center;
`;
export const Greenli = styled.div`
  margin: 0 0 0 4px;
  font-size: 13px;
  font-weight: 800;
  color: #785399;
  align-self: center;
  justify-self: center;
`;

export const Descgreen = styled(SmallText)`
  color: ${themes.light.text2};
`;

export const Descarb = styled(SmallText)`
  color: ${themes.light.text2};
`;

export const Carbonli = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #785399;
  align-self: center;
  justify-self: center;
`;
export const Note = styled.p`
  margin-top: 32px;
  font-size: 13px;
  color: #555;
  align-self: center;
  justify-self: center;
`;

export const PlayerWeekPoints = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-content: center;
  grid-template-columns: 100px 100px;
  justify-items: center;
  @media (max-width: 640px) {
  }
`;
export const GreenWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #785399;
  font-weight: 800;
  justify-items: center;
`;

export const CarbonWeekPoints = styled.h3`
  padding: 8px;
  font-size: 40px;
  color: #999;
  font-weight: 800;
`;

export const SectionText = styled(H1)`
  color: ${themes.light.text1};
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 640px) {
    font-size: 32px;
  }
`;
