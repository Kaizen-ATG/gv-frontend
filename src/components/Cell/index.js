import React from "react";
import {
  CellGroup,
  CellImage,
  CellIcon,
  CellContent,
  CellTitle,
  CellPoints,
  GreenPoints,
  CarbonPoints,
  CarbonIcon,
  LeafIcon,
} from "./CellElements";

class Cell extends React.Component {
  render() {
    return (
      <CellGroup>
        <CellImage image={this.props.image}></CellImage>
        <CellContent>
          <CellTitle>{this.props.title}</CellTitle>
          <CellPoints>
            <> {<LeafIcon />}</>
            <GreenPoints>{this.props.gpoints}</GreenPoints>
            <> {<CarbonIcon />}</>
            <CarbonPoints>{this.props.cpoints}</CarbonPoints>
          </CellPoints>
        </CellContent>
        <CellIcon gameicon={this.props.gicon}></CellIcon>
      </CellGroup>
    );
  }
}

export default Cell;
