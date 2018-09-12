import React, { Component } from "react";
import Player from "../Player/Player";
import styled from "styled-components";
import { keyframes } from "styled-components";

const bounceEntrance = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  95% {
    transform: translate(0px, 32px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 25px);

  }
`;

const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  box-shadow: 3px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  width: 285px;
  height: auto;
  padding: 0;
  bottom: 25px;
  animation: ${bounceEntrance} 0.15s ease forwards;
`;

const PlayerName = styled.li`
  position: relative;
  background-color: white;
  text-align: left;
  border-bottom: 1px solid rgba(191, 191, 191, 0.3);
  list-style: none;
  width: 100%;

  &:hover,
  :focus {
    background-color: rgb(242, 242, 242, 1);
    transition: background-color 0.25s ease;
    outline: 0;
  }
`;

const createPlayersList = player => {
  return (
    <PlayerName key={player} tabIndex="0" aria-label={player}>
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
    const noResults = "No players found with that name";

    return (
      <List>
        {players.length > 0
          ? players.map(player => createPlayersList(player))
          : createPlayersList(noResults)}
      </List>
    );

    // return <List>{players.map(player => createPlayersList(player))}</List>
    // return {players.length}
    // return {players.length > 0
    //   ? <List>{players.map(player => createPlayersList(player))}</List>
    //   : <List>{createPlayersList(noResults)}</List>};
  }
}

export default PlayersList;
