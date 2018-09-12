import React, { Component } from "react";
import styled from "styled-components";

const Name = styled.p`
  padding-left: 20px;
`;

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    // console.log(name);
    return (
      <React.Fragment>
        <Name aria-label={name}>{name}</Name>
      </React.Fragment>
    );
  }
}

export default Player;
