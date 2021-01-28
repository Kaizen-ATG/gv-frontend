import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import { SectionCaption, SectionCellGroup } from "./LeaderboardElements";
import { getUsers } from "../../utils/apiCalls.js";
// import { useDispatch, useSelector } from "react-redux";
// import { addUsers } from "../../redux/users.actions.js";

const LeaderboardSection = () => {
  const [users, setUsers] = useState();
  // const getReduxUsers = useSelector(state => state.users.allUsers);
  // const dispatch = useDispatch();
  useEffect(() => {
    const getUsersList = async () => {
      const response = await getUsers();
      // dispatch(addUsers(response));
      setUsers(response);
    }
    getUsersList();
  }, []);
  return (
    <>
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {users && users.map((user) => (
          <Cell
            title={cell.title}
            image={cell.image}
            gpoints={cell.greenpoints}
            cpoints={cell.carbonpoints}
            gicon={cell.gameicon}
          />
        ))}
      </SectionCellGroup>
    </>
  );
};

export default LeaderboardSection;
