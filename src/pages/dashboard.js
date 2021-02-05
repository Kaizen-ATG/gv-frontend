import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import LeaderboardSection from "../components/LeaderBoardSection/Index";
import LoggedInNavbar from "../components/LoggedInNavbar";
import LoggedInSidebar from "../components/LoggedInSidebar";
import ProfileSection from "../components/ProfileSection";
import { getUsers, getUser } from "../utils/apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, readUserDetail } from "../redux/users.actions.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.users.admin);
  const userLogged = localStorage.email;
  console.log(userLogged);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const getUsersList = async () => {
      const response = await getUsers();
      dispatch(addUsers(response));
    };
    const getUserDetails = async () => {
      const user = await getUser(userLogged);
      dispatch(readUserDetail(user));
    };
    getUsersList();
    getUserDetails();
  }, []);
  const userInfo = useSelector((state) => state.users.userDetail);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout>
        <LoggedInSidebar isOpen={isOpen} toggle={toggle} />
        <LoggedInNavbar toggle={toggle} />
        {userInfo &&
          userInfo.map((info) => (
            <ProfileSection
              gpoints={info.GreenPoints}
              cpoints={info.CarbonPoints}
              text={"Hello " + info.UserName}
              note="Here’s a look at your score this week"
              greenweekpoints={info.WeekGP}
              carbonweekpoints={info.WeekCP}
              username={info.UserName}
            />
          ))}
        <LeaderboardSection />
      </Layout>
    </>
  );
};

export default Dashboard;
