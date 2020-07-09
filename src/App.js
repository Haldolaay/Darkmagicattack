import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/home/header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Rout from "./components/route/route";
function App() {
  return (
    <div className="App">
      <Rout />
    </div>
  );
}

export default App;
