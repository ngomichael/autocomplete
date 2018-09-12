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
  margin-top: 50px;
`;

const Input = styled.input`
  position: relative;
  background: none;
  width: 300px;
  height: 25px;
  border: none;
  border-bottom: solid 2px #006600;
  font: 18px Open Sans, Lora;
  padding: 0 0 1px 4px;
  z-index: 1;

  &:focus {
    outline: none;
  }

  &:placeholder-shown + label {
    color: rgba(191, 191, 191, 0.5);
    font-size: 18px;
    top: 0;
  }

  &:focus + label {
    color: black;
    font-style: italic;
    font-size: 15px;
    top: -20px;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  color: black;
  font: italic 15px Open Sans, Lora;
  left: 4px;
  top: -20px;
  transition: 0.3s ease;
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
    // console.log(filteredPlayers);
    return (
      <Wrapper>
        <InputLabelContainer>
          <Input
            type="text"
            value={this.state.inputText}
            onChange={this.onChange}
            placeholder=" "
          />
          <InputLabel htmlFor="text">Player Name</InputLabel>
        </InputLabelContainer>
        {/* filteredPlayers.length !== 0 && */}
        {this.state.inputText.length > 0 && (
          <PlayersList players={filteredPlayers} />
        )}
      </Wrapper>
    );
  }
}

export default Autocomplete;
