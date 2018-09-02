import React, { Component } from "react";
import styles from "./styles.css";

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
