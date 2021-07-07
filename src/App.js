import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BankInfo from "./components/pages/BankInfo";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import OfferLetter from "./components/pages/OfferLetter";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nyif/dashboard" exact component={Dashboard} />
          <Route path="/nyif/offer-letter" exact component={OfferLetter} />
          <Route path="/nyif/bank-info" exact component={BankInfo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
