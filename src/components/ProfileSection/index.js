import React from "react";
import {
  ProfileWrapper,
  PlayerGroup,
  SectionText,
  PlayerAvatar,
  PlayerPoints,
  Greenli,
  Carbonli,
  Note,
  PlayerWeekPoints,
  GreenWeekPoints,
  Descgreen,
  CarbonWeekPoints,
  Descarb,
} from "./ProfileSectionElements";

const ProfileSection = (props) => {
  return (
    <ProfileWrapper>
      <PlayerGroup>
        <SectionText>{props.text}</SectionText>
        <PlayerAvatar
          src={require("../../images/avatars/avatar01.svg").default}
        />
        <PlayerPoints>
          <Greenli>{props.gpoints}</Greenli>
          <Carbonli>{props.cpoints}</Carbonli>
        </PlayerPoints>
        <Note>{props.note}</Note>
        <PlayerWeekPoints>
          <GreenWeekPoints>
            {props.greenweekpoints}
            <Descgreen>Green</Descgreen>
          </GreenWeekPoints>
          <CarbonWeekPoints>
            {props.carbonweekpoints}
            <Descarb>Carbon free</Descarb>
          </CarbonWeekPoints>
        </PlayerWeekPoints>
      </PlayerGroup>
    </ProfileWrapper>
  );
};

export default ProfileSection;
