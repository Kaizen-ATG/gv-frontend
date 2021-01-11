import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RedeempointsStarbucks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        StarBucks "15% discount" This will reduce your green points by 20 but
        your carbon free points remain. Would you like to continue?
      </Layout>
    </>
  );
};

export default RedeempointsStarbucks;
