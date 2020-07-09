import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Header from "./header";
import Title from "./title";
import Container from "./Container";
export default function Rout() {
  return (
    <Router>
      <Route path="/" component={Container} />
    </Router>
  );
}
