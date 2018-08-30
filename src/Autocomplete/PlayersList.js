import React, { Component } from "react";
import styles from "./styles.css";
import Player from "./Player";

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.createPlayersList = this.createPlayersList.bind(this);
  }
  createPlayersList() {
    return this.props.players.map(player => {
      <li>
        <Player name={player.name} />
      </li>;
    });
  }

  render() {
    this.props.players.map(player => {
      console.log(player.name);
    });
    // console.log(this.props.players[0].name);
    console.log(this.createPlayersList());
    return <ul>{this.createPlayersList()}</ul>;
  }
}

export default PlayersList;
