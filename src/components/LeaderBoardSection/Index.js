import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import { SectionCaption, SectionCellGroup } from "./LeaderboardElements";
//import { getUsers } from "../../utils/apiCalls.js";
import { useSelector } from "react-redux";
//import { addUsers } from "../../redux/users.actions.js";

const LeaderboardSection = () => {
  //const [users, setUsers] = useState();
  const reduxUsers = useSelector(state => state.users.allUsers);
  //const dispatch = useDispatch();
  console.log(reduxUsers);
  return (
    <>
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {reduxUsers && reduxUsers.map((user) => (
          <Cell
            key={user.UserName}
            title={user.UserName}
            image="../../images/avatars/avatar08.svg"
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
