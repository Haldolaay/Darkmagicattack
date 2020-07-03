import React from "react";
import { Input } from "@material-ui/core";
import "./home.css";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      isUpdated: false,
      typingTimeout: 0,
    };
  }
  componentDidMount() {}
  gettingValue(event) {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }
    let cardName = event.replace(/ /g, "%");
    console.log(cardName);
    if (!this.state.isUpdated) {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.setState({
            isUpdated: true,
            typingTimeout: setTimeout(function () {
              this.setState({ card: response });
            }, 5000),
          });
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
          <div>Work in ProgreSS</div>
        ) : (
          console.log("there is nothing")
        )}
      </div>
    );
  }
}
