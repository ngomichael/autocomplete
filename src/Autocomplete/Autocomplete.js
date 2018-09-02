import React, { Component } from "react";
import styles from "./styles.css";
import PlayersList from "./PlayersList/PlayersList";

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

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //updates inputText state
  onChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  debounce(func, wait) {
    let called = false;
    return () => {};
  }

  render() {
    const players = basketballPlayers.map(player => player.name);
    const filteredPlayers = players.filter(player =>
      player.includes(this.state.inputText)
    );
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.onChange}
          />
        </form>
        <PlayersList players={filteredPlayers} />
      </div>
    );
  }
}

export default Autocomplete;
