import React, { useEffect, useRef } from "react";
// import { Button } from "../ButtonElement";
import lottie from "lottie-web";
import animationData from "./coupon.json";
import {
  ContentH1,
  Text,
  ContentWrap,
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

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <>
      <Container>
        <ContentWrap>
          <div
            className="container"
            ref={container}
            style={{ width: 300, margin: "0 auto" }}
          ></div>
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
