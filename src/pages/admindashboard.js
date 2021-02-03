import React, { useState } from "react";
import Layout from "../components/layout/layout";
import LeaderboardSection from "../components/LeaderBoardSection/Index";
import LoggedInNavbar from "../components/LoggedInNavbar";
import LoggedInSidebar from "../components/LoggedInSidebar";
import AdminProfileSection from "../components/AdminProfileSection";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <LoggedInNavbar toggle={toggle} />
        <AdminProfileSection />
      </Layout>
    </>
  );
};

export default AdminDashboard;
