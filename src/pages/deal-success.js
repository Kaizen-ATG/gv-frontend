import React, { useState } from "react";
import DealSuccessSection from "../components/DealSuccess";
import Layout from "../components/layout/layout";
import LoggedInNavbar from "../components/LoggedInNavbar";
import LoggedInSidebar from "../components/LoggedInSidebar";

const DealSuccess = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <LoggedInNavbar toggle={toggle} />
        <DealSuccessSection />
      </Layout>
    </>
  );
};

export default DealSuccess;
