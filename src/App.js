import React from "react";
import logo from "./logo.svg";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Title from "./components/home/title";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Home from "./components/home/home";
import Rout from "./components/route/route";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div">
          <Header />
          <Title />
          <Rout />
        </Typography>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
