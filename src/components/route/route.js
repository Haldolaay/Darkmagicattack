import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Container from "../home/Container";
export default function Rout() {
  return (
    <Router>
      <Route path="/" component={Container} />
    </Router>
  );
}
