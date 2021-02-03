import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AdminDashboard from "./pages/admindashboard";
import DealSuccess from "./pages/deal-success";
import AddPoints from "./pages/addPoints";
import Profile from "./pages/profile";
import HowItWorks from "./pages/how-it-works";
import RedeemSummary from "./pages/redeemsummary";
import Redeem from "./pages/redeem";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { isAdmin } from "./redux/users.actions";

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      const token = localStorage.gvToken;
      console.log("token ====", token);
      console.log(typeof token, token);
      if (token) {
        const decodedToken = jwtDecode(token);
        //console.log(decodedToken["cognito:groups"][0]);
        // if (decodedToken["cognito:groups"][0]) {
        //   dispatch(isAdmin(true));
        // }

        // if user is Admin: what do we want to do wuth that info?
        // eg: Admin only screen (Joe)
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  console.log(isAuthenticated, localStorage.gvToken);
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/admindashboard" component={AdminDashboard} exact />
        <Route path="/how-it-works" component={HowItWorks} exact />
        <Route path="/addpoints" component={AddPoints} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/redeem" component={Redeem} exact />
        <Route path="/redeem-summary" component={RedeemSummary} exact />
        <Route path="/deal-success" component={DealSuccess} exact />
      </Switch>
    </Router>
  );
}

export default App;
