import React from "react";
// import { Button } from "../ButtonElement";
import {
  ContentH1,
  Text,
  ContentWrap,
  ImageWrapper,
  Container,
  CodeText,
  CodeTextContainer,
  CopyCode,
} from "./DealSuccessElememts";

const DealSuccessSection = () => {
  //   const [hover, setHover] = useState(false);

  //   const onHover = () => {
  //     setHover(!hover);
  //   };

  return (
    <>
      <Container>
        <ContentWrap>
          <ImageWrapper src="/images/elements/Coupon.svg" alt="Success" />
          <ContentH1>Woo Hoo!</ContentH1>
          <Text>Here's your unique code</Text>
          <CodeTextContainer>
            {" "}
            <CodeText>DUH002</CodeText>
            <CopyCode />
          </CodeTextContainer>
          <Text>An email has been sent with the code for safe keeps</Text>
        </ContentWrap>
      </Container>
    </>
  );
};

export default DealSuccessSection;
