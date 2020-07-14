import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Title from "./components/home/title";
import Header from "./components/home/header";
import Footer from "./components/home/footer";
import Home from "./components/home/home";
import Rout from "./components/route/route";
import Search from "./components/home/search";
const initialState = { input: "dark magician", fetch };
// const initialState = { input: "" };
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "NEWINPUT":
      return {
        input: action.payload,
      };
      break;
    case "FETCH":
      return { data: action.payload };
      break;
    default:
      return {
        input: state,
        data: state,
      };
  }
}

const store = createStore(reducer);
console.log(store);
function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography component="div">
            <Header />
            <Title />
            <Search />
            <Rout />
          </Typography>
          <Footer />
        </Container>
      </React.Fragment>
    </Provider>
  );
}

export default App;
