import React from "react";
import {
  CellGroup,
  CellImage,
  CellContent,
  CellTitle,
  CellPoints,
  GreenPoints,
  CarbonPoints,
  CarbonIcon,
  LeafIcon,
} from "./CellElements";

const Cell = (props) => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellContent>
      <CellTitle>{props.title}</CellTitle>
      <CellPoints>
        <> {<LeafIcon />}</>
        <GreenPoints>{props.gpoints}</GreenPoints>
        <> {<CarbonIcon />}</>
        <CarbonPoints>{props.cpoints}</CarbonPoints>
      </CellPoints>
    </CellContent>
  </CellGroup>
);

export default Cell;
