import { Component } from 'react';
import PropTypes from "prop-types";

import { renderGameElement } from "./utility";
import generateStyles from "./styles";
import Hello from "../Hello";

import "./styles.css";

class GameCards extends Component {
  render() {
    const styles = generateStyles({ bgColor: "lightgray" });
    
    const gamesDataJSX = this.props.gamesData.map(renderGameElement);

    return (
      <div id="game-cards" style={styles.container}>
        {gamesDataJSX}
        <Hello />
      </div>
    );
  }
}

GameCards.defaultProps = {
  gamesData: []
}

GameCards.propTypes = {
  gamesData: PropTypes.array,
}

export default GameCards;