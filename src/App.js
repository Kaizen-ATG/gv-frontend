import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Dashboard from "./pages/dashboard";
import AddPoints from "./pages/addPoints";
import Profile from "./pages/profile";
import HowItWorks from "./pages/how-it-works";
import RedeemPointsStarbucks from "./pages/redeemPointsStarbucks";
import Redeem from "./pages/redeem";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/how-it-works" component={HowItWorks} exact />
        <Route path="/addpoints" component={AddPoints} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/redeem" component={Redeem} exact />
        <Route
          path="/redeemPointsStarbucks"
          component={RedeemPointsStarbucks}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
