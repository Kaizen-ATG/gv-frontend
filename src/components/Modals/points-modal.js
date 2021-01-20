import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { H1, H3 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { Button } from "../ButtonElement";

const Background = styled.div`
  margin-top: -80px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
`;

const ModalWrapper = styled.div`
  width: 460px;
  height: 420px;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 12;
  border-radius: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 450px) {
    /* margin: 0 16px; */
    max-width: 320px;
    height: 480px;
  }
`;

const Points = styled(H3)`
  font-weight: 600;
`;

const ModalImg = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 60px;
`;

const CloseModalButton = styled(IoMdClose)`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  padding: 0;
  z-index: 10;
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    line-height: 1.5em;
    width: 80%;
  }
`;

const TextWrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: 100px 40px 50px;
  grid-gap: 4px;
  align-items: center;
`;

export const ContentH1 = styled(H1)`
  color: ${themes.light.text1};
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src="/images/elements/Success.svg" alt="Success" />
              <CloseModalButton
                aria-label="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <ContentH1>Sweet!</ContentH1>
              <TextWrapper>
                <Text>You just earned </Text>
                <Points>30</Points> <Text>points</Text>
              </TextWrapper>
              <BtnWrapper>
                <Button
                  to="/dashboard"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary=""
                  dark="true"
                  btnborder="true"
                >
                  Go to dashboard
                </Button>
                <Button
                  to="/redeem"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark=""
                >
                  Redeem points
                </Button>
              </BtnWrapper>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
