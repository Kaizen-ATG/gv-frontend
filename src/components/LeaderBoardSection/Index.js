import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import { SectionCaption, SectionCellGroup } from "./LeaderboardElements";
import { useSelector } from "react-redux";

const LeaderboardSection = () => {
  const reduxUsers = useSelector(state => state.users.allUsers);
  console.log(reduxUsers);
  return (
    <>
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {reduxUsers && reduxUsers.map((user) => (
          <Cell
            key={user.UserName}
            title={user.UserName}
            image={'https://greenvibe.s3.eu-west-2.amazonaws.com/images/avatars/'+user.UserName+'.svg'}
            gpoints={user.GreenPoints}
            cpoints={user.CarbonPoints}
            gicon="../../images/icons/fist.svg"
          />
        ))}
      </SectionCellGroup>
    </>
  );
};
export default LeaderboardSection;
