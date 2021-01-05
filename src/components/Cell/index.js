import React from "react";
import {
  CellGroup,
  CellImage,
  CellContent,
  CellTitle,
  CellPoints,
  GreenPoints,
  CarbonPoints,
} from "./CellElements";

const Cell = (props) => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellContent>
      <CellTitle>{props.title}</CellTitle>
      <CellPoints>
        <GreenPoints>{props.gpoints}</GreenPoints>
        <CarbonPoints>{props.cpoints}</CarbonPoints>
      </CellPoints>
    </CellContent>
  </CellGroup>
);

export default Cell;
