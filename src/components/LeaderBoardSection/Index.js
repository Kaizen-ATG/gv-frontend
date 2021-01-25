import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import staticdata from "../../data/staticdata.json";
import { SectionCaption, SectionCellGroup } from "./LeaderboardElements";
import { getUsers } from "../../utils/apiCalls.js"

const LeaderboardSection = () => {
  const [users,setUsers]=useState();
  useEffect(() => {
    const getUsersList = () => {
      const response = getUsers();
      console.log(response);
      setUsers(response);    
    };
    getUsersList();
  }, []);
  console.log(users);
  return (
    <>
      <SectionCaption>Leaderboard</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map((cell) => (
          <Cell
            title={cell.title}
            image={cell.image}
            gpoints={cell.greenpoints}
            cpoints={cell.carbonpoints}
          />
        ))}
      </SectionCellGroup>
    </>
  );
};

export default LeaderboardSection;
