import React, { useState } from "react";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "./search.css";
const Search = (props) => {
  const [input, setInput] = useState("");
  let handlechange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="input">
      <Input type="text" placeholder="Search Cards.." onChange={handlechange} />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          props.dispatch({ type: "NEWINPUT", payload: input });
        }}
      >
        Search
      </Button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    input: state.input, // this state is from redux store, not this component lol
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Search);
