import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LeaderboardSection from "../components/LeaderBoardSection/Index";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import Sidebar from "../components/Sidebar";

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
        <ProfileSection
          gpoints="60"
          cpoints="80"
          text="Hello Stephany"
          note="Here’s a look at your score this week"
          greenweekpoints="10"
          carbonweekpoints="20"
        />
        <LeaderboardSection />
      </Layout>
    </>
  );
};

export default Dashboard;
