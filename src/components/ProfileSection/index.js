import React, { useState } from "react";
import { Button } from "../ButtonElement";
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
  BtnWrapper,
  Descarb,
  AddIcon,
  GiftIcon,
  LeafIcon,
  CarbonIcon,
} from "./ProfileSectionElements";

const ProfileSection = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ProfileWrapper>
      <PlayerGroup>
        <SectionText>{props.text}</SectionText>
        <PlayerAvatar src="/images/avatars/avatar05.svg" />
        <PlayerPoints>
          <> {<LeafIcon />}</>
          <Greenli>{props.gpoints}</Greenli>
          <>{<CarbonIcon />}</>
          <Carbonli>{props.cpoints}</Carbonli>
        </PlayerPoints>
        <Note>{props.note}</Note>
        <PlayerWeekPoints>
          <GreenWeekPoints>
            {props.greenweekpoints}
            <Descgreen> Green</Descgreen>
          </GreenWeekPoints>
          <CarbonWeekPoints>
            {props.carbonweekpoints}
            <Descarb>Carbon free</Descarb>
          </CarbonWeekPoints>
        </PlayerWeekPoints>
        <BtnWrapper>
          <Button
            to="redeem"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary=""
            dark="true"
            btnborder="true"
          >
            {hover ? <GiftIcon /> : <GiftIcon />} Redeem Points
          </Button>
          <Button
            to="addpoints"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark=""
          >
            {hover ? <AddIcon /> : <AddIcon />} Add Points
          </Button>
        </BtnWrapper>
      </PlayerGroup>
    </ProfileWrapper>
  );
};

export default ProfileSection;
