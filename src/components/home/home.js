import React from "react";
import { Input } from "@material-ui/core";
import "./home.css";
import Pagination from "@material-ui/lab/Pagination";
import Result from "./result";
export default class Home extends React.Component {
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
          console.log(response);
          this.setState({ cards: response.data, isUpdated: true });
        });
    }
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
        <Input
          type="text"
          placeholder="Search Cards.."
          onChange={(e) => this.gettingValue(e.target.value)}
        />
        {/* <div className="result">
          {this.state.isResultUpdated
            ? this.state.result.map((item) => {
                return (
                  <div className="resultValue">
                    <img src={item.card_images[0].image_url_small} />
                  </div>
                );
              })
            : console.log("there is nothing")}
        </div> */}
        {this.state.isResultUpdated ? (
          <Result cards={this.state.result} />
        ) : (
          <div>working on it</div>
        )}
      </div>
    );
  }
}
