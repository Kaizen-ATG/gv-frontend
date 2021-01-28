import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import LeaderboardSection from "../components/LeaderBoardSection/Index";
import LoggedInNavbar from "../components/LoggedInNavbar";
import LoggedInSidebar from "../components/LoggedInSidebar";
import ProfileSection from "../components/ProfileSection";
import { getUsers } from "../utils/apiCalls.js";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/users.actions.js";


const Dashboard = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getUsersList = async () => {
      const response = await getUsers();
      dispatch(addUsers(response));
    }
    getUsersList();
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <LoggedInNavbar toggle={toggle} />
        <ProfileSection
          gpoints="120"
          cpoints="160"
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
