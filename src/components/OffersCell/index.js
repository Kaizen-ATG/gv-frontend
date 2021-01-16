import React from "react";
import {
  CellGroup,
  CellImage,
  CellContent,
  CellTitle,
  CellPoints,
  Discount,
  BagIconTick,
  NavItem,
  NavBtn,
  RightArrowIcon,
} from "./OffersCellElements";

const OffersCell = (props) => (
  <CellGroup to="/redeem-summary">
    <CellImage image={props.image}></CellImage>
    <CellContent>
      <CellTitle>{props.title}</CellTitle>
      <CellPoints>
        <> {<BagIconTick />}</>
        <Discount>{props.disc}</Discount>
      </CellPoints>
    </CellContent>
    <NavItem>
      <NavBtn>{<RightArrowIcon />}</NavBtn>
    </NavItem>
  </CellGroup>
);

export default OffersCell;
