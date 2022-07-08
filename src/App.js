import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BankInfo from "./components/pages/BankInfo";
import BankUpdate from "./components/pages/BankUpdate";
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import LandingPage from "./components/pages/LandingPage";
import Letter from "./components/pages/Letter";
import OfferLetter from "./components/pages/OfferLetter";
import Print from "./components/pages/Print";
import BankUpdateScreen from "./components/pages/UpdateBank";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/nyif/updatebank" exact component={BankUpdateScreen} />
          <Route path="/nyif/update/bankinfo" exact component={BankUpdate} />
          <Route path="/nyif/validatebvn" exact component={Home} />
          <Route path="/nyif/dashboard" exact component={Dashboard} />
          <Route path="/nyif/offer-letter" exact component={OfferLetter} />
          <Route path="/nyif/bank-info" exact component={BankInfo} />
          <Route path="/nyif/letter" exact component={Letter} />
          {/* <Route path="/nyif/print" exact component={Print} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
