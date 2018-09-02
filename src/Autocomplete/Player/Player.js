import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.props.name}</p>
      </React.Fragment>
    );
  }
}

export default Player;
