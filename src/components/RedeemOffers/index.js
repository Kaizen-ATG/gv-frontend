import React from "react";
import redeemoffers from "../../data/redeemoffers.json";
import OffersCell from "../OffersCell";
import {
  SectionCaption,
  SectionCellGroup,
  ContentH1,
  Text,
  DealWrap,
  ImageWrapper,
  Container,
} from "./RedeemElements";

const RedeemOffersSection = () => {
  return (
    <>
      <Container>
        <DealWrap>
          <ImageWrapper src="/images/elements/rewards.svg" alt="enter code" />
          <ContentH1>You've got 5 deals </ContentH1>
          <Text>Go ahead, redeem them</Text>
        </DealWrap>
      </Container>

      <SectionCaption>Online and In Store Offers</SectionCaption>
      <SectionCellGroup>
        {redeemoffers.cells.map((cell) => (
          <OffersCell
            title={cell.title}
            image={cell.image}
            disc={cell.discount}
            cpoints={cell.carbonpoints}
            dest={cell.destination}
          />
        ))}
      </SectionCellGroup>
    </>
  );
};

export default RedeemOffersSection;
