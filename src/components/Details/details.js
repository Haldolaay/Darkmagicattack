import React, { useState, useEffect } from "react";
import "./details.css";
// export default function Detail(props) {
//   const [card, setCard] = useState();
//   const [cardID, setCardID] = useState(0);
//   const [idUpdate, setIDUpdate] = useState(false);
//   useEffect(() => {
//     // console.log(props);
//     // console.log(props.match.params.id);
//     // setCardID(props.match.params.id);
//     // setIDUpdate(true);
//     // console.log(cardID);
//     // async function getData() {
//     //   const response = await fetch(
//     //     `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardID}`
//     //   );
//     //   const json = await response.json();
//     //   setCard(json);
//     //   console.log(json);
//     //   // console.log(card);
//     // }
//     // getData();
//   }, []);
//   useEffect(() => {

//   }, [idUpdate]);

// }
export default class details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      card: [],
      isthecardhereyet: false,
    };
  }
  componentDidMount() {
    fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${this.props.match.params.id}`
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({ card: response.data, isthecardhereyet: true })
      );
  }
  render() {
    return this.state.isthecardhereyet ? (
      <div className="card_container">
        <div className="left">
          <img src={this.state.card[0].card_images[0].image_url} />
          {console.log(this.state.card)}
        </div>
        <div className="right">
          <div>
            <p>{this.state.card[0].desc}</p>
          </div>
        </div>
      </div>
    ) : (
      <div>still not working</div>
    );
  }
}
