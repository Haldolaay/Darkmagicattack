import React from "react";
import logo from "../pic/yugiohlogo.png";
import puzzle from "../pic/puzzle.png";
import puzzle2 from "../pic/puzzle2.png";
import puzzle3 from "../pic/puzzle3.png";
import puzzle4 from "../pic/puzzle4.png";
import "./title.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Title() {
  return (
    <div style={{ backgroundColor: "##95cded" }}>
      <div className="container">
        <button className="logo">
          <a href="/">
            <img src={logo} />
          </a>
        </button>

        <button className="first">
          <img src={puzzle} />
        </button>
        <button className="second">
          <img src={puzzle2} />
        </button>
        <button className="third">
          <img src={puzzle3} />
        </button>
        <button className="fourth">
          <img src={puzzle4} />
        </button>
      </div>
    </div>
  );
}
