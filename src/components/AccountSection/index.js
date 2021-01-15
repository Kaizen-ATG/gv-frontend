import React from "react";
import {
  AcctContainer,
  AcctH1,
  AcctImageWrapper,
} from "./AccountSectionElements";

const AccountSection = () => {
  return (
    <>
      <AcctContainer>
        <AcctImageWrapper
          src="/images/characters/travolta.gif"
          alt="enter code"
        />
        <AcctH1>Nothing to see here... </AcctH1>
      </AcctContainer>
    </>
  );
};

export default AccountSection;
