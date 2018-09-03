import React, { Component } from "react";
import Player from "../Player/Player";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 50vw;
  height: auto;
  padding: 0;
`;

const PlayerName = styled.li`
  text-align: left;
  border-bottom: 1px solid rgba(191, 191, 191, 0.5);
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
