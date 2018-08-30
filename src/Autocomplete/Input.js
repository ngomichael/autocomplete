import React, { Component } from "react";
import styles from "./styles.css";
import PlayersList from "./PlayersList";

const basketballPlayers = [
  {
    name: "Lebron James"
  },
  {
    name: "Kobe Bryant"
  },
  {
    name: "Juice Wrld"
  },
  {
    name: "Aminay"
  },
  {
    name: "Purp Skurp"
  },
  {
    name: "Ruskel Wesbrook"
  },
  {
    name: "Lebron James Jr"
  }
];

class Input extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
        </form>
        <PlayersList players={basketballPlayers} />
      </div>
    );
  }
}

export default Input;
