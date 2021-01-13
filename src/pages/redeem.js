import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LoggedInSidebar from "../components/LoggedInSidebar";
import Navbar from "../components/Navbar";
import RedeemOffersSection from "../components/RedeemOffers";

const Redeem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <RedeemOffersSection />
      </Layout>
    </>
  );
};

export default Redeem;
