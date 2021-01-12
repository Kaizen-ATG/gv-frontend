import React, { useState } from "react";
import Layout from "../components/layout/layout";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddPoints from "../components/AddPoints";

const Points = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <AddPoints />
      </Layout>
    </>
  );
};

export default Points;
