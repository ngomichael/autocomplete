import React, { Component } from "react";
import styles from "./styles.css";
import Player from "../Player/Player";

const createPlayersList = player => {
  return (
    <li key={player} className={styles.player}>
      <Player name={player} />
    </li>
  );
};

class PlayersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players } = this.props;
    return <ul>{players.map(player => createPlayersList(player))}</ul>;
  }
}

export default PlayersList;
