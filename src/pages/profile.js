import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LoggedInSidebar from "../components/LoggedInSidebar";
import LoggedInNavbar from "../components/LoggedInNavbar";
import AccountSection from "../components/AccountSection";

const Profile = () => {
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
        <AccountSection />
      </Layout>
    </>
  );
};

export default Profile;
