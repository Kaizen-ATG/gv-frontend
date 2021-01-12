import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";
import AddPoints from "../components/AddPoints";
import LoggedInSidebar from "../components/LoggedInSidebar";

const Points = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <AddPoints />
      </Layout>
    </>
  );
};

export default Points;
