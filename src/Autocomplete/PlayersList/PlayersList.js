import React, { Component } from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  padding: 0;
`;

const PlayerName = styled.li`
  background-color: lightgray;
  border-bottom: 1px solid gray;
  list-style: none;
  width: 100%;
`;

const createPlayersList = player => {
  return (
    <PlayerName key={player}>
      <Player name={player} />
    </PlayerName>
  );
};

class PlayersList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { players } = this.props;
    return <List>{players.map(player => createPlayersList(player))}</List>;
  }
}

export default PlayersList;
