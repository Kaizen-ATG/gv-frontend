import React, { useState } from "react";
import Layout from "../components/layout/layout";
import AddPoints from "../components/AddPoints";
import LoggedInSidebar from "../components/LoggedInSidebar";

import LoggedInNavbar from "../components/LoggedInNavbar";

const Points = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        {/* <Navbar toggle={toggle} /> */}
        <LoggedInNavbar toggle={toggle} />
        <AddPoints />
      </Layout>
    </>
  );
};

export default Points;
