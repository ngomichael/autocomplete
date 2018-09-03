import React, { Component } from "react";
import PlayersList from "./PlayersList/PlayersList";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  position: relative;
  background: none;
  width: 250px;
  height: 25px;
  border: none;
  border-bottom: solid 2px purple;
  font: 18px Open Sans, Lora;
  padding: 0 0 1px 4px;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &:focus + label {
    transform: translate(10px, 10px);
  }
`;

const InputLabel = styled.label`
  margin-right: 15px;
  font: 18px Open Sans, Lora;
  // position: absolute;
  // transition: 0.3s ease;
`;

const InputLabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  //updates inputText state
  onChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  debounce(func, wait) {
    let called = false;
    return () => {};
  }

  render() {
    const players = basketballPlayers.map(player => player.name);
    const filteredPlayers = players.filter(player =>
      player.toLowerCase().includes(this.state.inputText.toLowerCase())
    );
    return (
      <Wrapper>
        <InputLabelContainer>
          <InputLabel>Player Name:</InputLabel>
          <Input
            type="text"
            value={this.state.inputText}
            placeholder="Steph Curry"
            onChange={this.onChange}
          />
        </InputLabelContainer>
        {this.state.inputText.length > 0 && (
          <PlayersList players={filteredPlayers} />
        )}
      </Wrapper>
    );
  }
}

export default Autocomplete;
