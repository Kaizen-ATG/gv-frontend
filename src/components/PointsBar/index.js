import React from "react";
import { Container, Label } from "./PointsBarElements";

const PointsBar = (props) => {

  const { bgcolor, completed, completedpercentage } = props;


  const fillerStyles = {
    height: "100%",
    width: `${completedpercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: "2px",
    textAlign: "right",
  };

  return (
    <Container>
      <div style={fillerStyles}>
        <Label>{`${completed}`}</Label>
      </div>
    </Container>
  );
};

export default PointsBar;
