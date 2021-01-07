import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReactCodeInput from 'react-code-input';
import {
  SectionText,
  VerificationInput
} from "../components/ProfileSection/ProfileSectionElements";
import {
  Button
} from "../components/buttons/PrimaryBtn";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <SectionText>Add Points</SectionText>
        <VerificationInput>
        <ReactCodeInput  type='text' fields={4}/>
        </VerificationInput>
        <Button type="submit"> Submit </Button>
      </Layout>
    </>
  );
};

export default Dashboard;
