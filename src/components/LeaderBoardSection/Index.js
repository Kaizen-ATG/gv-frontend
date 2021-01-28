import React from "react";
import Cell from "../Cell";
import staticdata from "../../data/staticdata.json";
import { SectionCaption, SectionCellGroup } from "./LeaderboardElements";

const LeaderboardSection = () => {
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
            gicon={cell.gameicon}
          />
        ))}
      </SectionCellGroup>
    </>
  );
};

export default LeaderboardSection;
