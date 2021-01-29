import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import PointsSuccess from "./pages/points-success";
import AddPoints from "./pages/addPoints";
import Profile from "./pages/profile";
import HowItWorks from "./pages/how-it-works";
import RedeemSummary from "./pages/redeemsummary";
import Redeem from "./pages/redeem";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
//import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { AppContext } from "./libs/contextLib";

Amplify.configure(awsconfig);

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/how-it-works" component={HowItWorks} exact />
          <Route path="/addpoints" component={AddPoints} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/redeem" component={Redeem} exact />
          <Route path="/redeem-summary" component={RedeemSummary} exact />
          <Route path="/points-success" component={PointsSuccess} exact />
        </AppContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
