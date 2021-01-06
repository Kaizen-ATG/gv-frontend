import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Dashboard from "./pages/dashboard";
import AddPoints from "./pages/addPoints";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/add" component={AddPoints} exact />
      </Switch>
    </Router>
  );
}

export default App;
