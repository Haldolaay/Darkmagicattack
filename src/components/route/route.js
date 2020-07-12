import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Detail from "../Details/details";
import Home from "../home/home";
export default function Rout() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}
