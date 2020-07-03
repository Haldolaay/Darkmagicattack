import React from "react";
import { Input } from "@material-ui/core";
import "./home.css";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isUpdated: false,
      result: "",
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
      let koko = this.state.cards.filter((item) => {
        return re.test(item.name);
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
        {this.state.isUpdated ? (
          <div>working on it</div>
        ) : (
          console.log("there is nothing")
        )}
      </div>
    );
  }
}
