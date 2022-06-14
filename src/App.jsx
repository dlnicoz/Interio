import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Foot from "./components/Foot";
import Home from "./components/Home";
import Login from "./components/Login";
import Serve from "./components/Serve";
import ArProfile from "./components/ArProfile";
import Arprofile1 from "./components/Arprofile1";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/serve" component={Serve} />
          <Route path="/Architect" component={ArProfile} />
          <Route path="/Architect1" component={Arprofile1} />
          <Route path="/architect" component={Profile} />
        </Switch>

        <Foot />
      </Router>
    </>
  );
}

export default App;
