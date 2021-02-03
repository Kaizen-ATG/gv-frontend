import React, { useState } from "react";
import { CTAButton } from "../ButtonElement";
import CardSection from "../Cards";
import CardSectionAlt from "../Cards/CardsAlt";
import {
  ContentWrapper,
  SectText,
  CardGroup,
  CardText,
  BtnWrapper,
} from "./AdminProfileSectionElements";

const AdminProfileSection = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ContentWrapper>
      <CardGroup>
        <SectText>Hello Steve!</SectText>
        <CardText>
          You’ve got a few pending tasks to take care of by the end of the week.
        </CardText>
        <BtnWrapper>
          <CTAButton
            to="/deal-success"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark=""
          >
            View Tasks
          </CTAButton>
        </BtnWrapper>
      </CardGroup>
      <CardSection />
      <CardSectionAlt />
    </ContentWrapper>
  );
};

export default AdminProfileSection;
