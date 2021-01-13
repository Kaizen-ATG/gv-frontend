import React from "react";
import {
  CellGroup,
  CellImage,
  CellContent,
  CellTitle,
  CellPoints,
  Discount,
  BagIconTick,
} from "./OffersCellElements";

const OffersCell = (props) => (
  <CellGroup>
    <CellImage image={props.image}></CellImage>
    <CellContent>
      <CellTitle>{props.title}</CellTitle>
      <CellPoints>
        <> {<BagIconTick />}</>
        <Discount>{props.disc}</Discount>
      </CellPoints>
    </CellContent>
  </CellGroup>
);

export default OffersCell;
