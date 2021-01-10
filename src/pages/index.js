import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/layout/layout";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Layout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
      </Layout>
    </>
  );
};

export default Home;
