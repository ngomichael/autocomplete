import React, { Component } from "react";
import styles from "./styles.css";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Player;
