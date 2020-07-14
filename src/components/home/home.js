import React from "react";
import { connect } from "react-redux";
import "./home.css";
import Pagination from "@material-ui/lab/Pagination";
import Result from "./result";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isUpdated: false,
      result: [],
      isResultUpdated: false,
    };
  }
  componentDidMount() {
    if (!this.state.isUpdated) {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        .then((response) => response.json())
        .then((response) => {
          this.setState({ cards: response.data, isUpdated: true });
          this.props.dispatch({ type: "FETCH", payload: response.data });
        });
    }
  }
  componentDidUpdate(prevProps) {
    prevProps != this.props
      ? this.gettingValue(this.props.input)
      : console.log("they are the same");
  }

  gettingValue(event) {
    let cardName = event;
    var re = new RegExp(cardName, "g");
    // console.log(re);
    if (this.state.isUpdated) {
      this.setState({
        result: this.state.cards.filter((item) => {
          return re.test(item.name.toLowerCase());
        }),
        isResultUpdated: true,
      });
    }
  }
  render() {
    return (
      <div className="home-container">
        {this.state.isResultUpdated ? (
          <Result cards={this.state.result} />
        ) : (
          <div>working on it</div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    input: state.input, // this state is from redux store, not this component lol
    data: state.data,
  };
}

// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps)(Home);
