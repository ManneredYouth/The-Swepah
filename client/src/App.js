import React, { useState, useEffect } from "react"
import Axios from "axios"
import GetUsers from "./othercode";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./Login/Login";
import Lobby from "./Portals/Lobby/Lobby";
import Dashboard from "./Portals/Dashboard/Dashboard";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/lobby">
          <Lobby />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/getUsers">
          <GetUsers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;